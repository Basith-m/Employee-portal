import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAPIService } from '../services/admin-api.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string=""
  password:string=""
  constructor(private api:AdminAPIService,private router:Router, private toaster:ToasterService){}

  login(){
    if(this.email && this.password){
      this.api.authenticate().subscribe({
        next:(res:any)=>{
          // console.log(res);
          const {email,password} = res
          if(email===this.email && password===this.password){
            // save admin details
            localStorage.setItem("admin_name",res.name)
            localStorage.setItem("admin_pswd",res.password)
            this.toaster.showSuccess("Login Successful"); 
            this.router.navigateByUrl("dashboard")
          }
          else{
            this.toaster.showError("Invalid Email/Password")    
          }   
        },
        error:(res:any)=>{
          // console.log(res);  
          alert(res.meassage)
        }
      })
    }else{
      alert("Please fill the form")
    }
  }
}
