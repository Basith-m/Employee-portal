import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAPIService } from '../services/admin-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string=""
  password:string=""
  constructor(private api:AdminAPIService,private router:Router){}

  login(){
    if(this.email && this.password){
      this.api.authenticate().subscribe({
        next:(res:any)=>{
          // console.log(res);
          const {email,password} = res
          if(email===this.email && password===this.password){
            alert("Login Successful"); 
            this.router.navigateByUrl("dashboard")
          }
          else{
            alert("Invalid Email/Password")    
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
