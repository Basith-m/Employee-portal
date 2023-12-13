import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';
import { UserModel } from '../users.model';
import jspdf from 'jspdf'
import autoTable from 'jspdf-autotable'
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  allUsers:UserModel[]=[]

  searchKey:string = ""

  p:number = 1;

  constructor(private api:UserApiService, private toaster:ToasterService){}

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.api.getAllUserAPI().subscribe({
      next:(res:any)=>{
        console.log(res);    
        this.allUsers = res   
      },
      error:(err:any)=>{
        this.toaster.showError(err.meassage)
      }
    })
  }

  deleteUser(id:any){
    this.api.deleteUserAPI(id).subscribe({
      next:(res:any)=>{
        console.log(res); 
        this.toaster.showSuccess("User removed successfully...")   
        this.getAllUsers() 
      },
      error:(err:any)=>{
        this.toaster.showError(err.meassage)
      }
    })
  }

  sortById(){
    this.allUsers.sort((a:any,b:any) => a.id-b.id)
  }

  sortByName(){
    this.allUsers.sort((a:any,b:any) => a.name.localeCompare(b.name))
  }

  generatePdf(){
    let pdf = new jspdf()
    let head = [['ID','Username','Email','Status']]
    let body:any = []
    this.allUsers.forEach((item:any) => {
      body.push([item.id,item.name,item.email,item.active])
    })
    pdf.setFontSize(16)
    pdf.text("All Users List",10,10)
    autoTable(pdf,{head,body})
    pdf.output('dataurlnewwindow')
    pdf.save('allUserslist.pdf')
  }

}

