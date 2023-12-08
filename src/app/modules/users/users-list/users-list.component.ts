import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';
import { UserModel } from '../users.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  allUsers:UserModel[]=[]

  constructor(private api:UserApiService){}

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
        alert(err.meassage)
      }
    })
  }

  deleteUser(id:any){
    this.api.deleteUserAPI(id).subscribe({
      next:(res:any)=>{
        console.log(res); 
        alert("User removed successfully...")   
        this.getAllUsers() 
      },
      error:(err:any)=>{
        alert(err.meassage)
      }
    })
  }
}
