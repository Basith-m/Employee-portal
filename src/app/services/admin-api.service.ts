import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAPIService {

  SERVER_URL = "https://employee-portal-server-puvw.onrender.com"
  constructor(private http:HttpClient) { }

  authenticate(){
    // api-call - http://localhost:3000/users/1
    return this.http.get(`${this.SERVER_URL}/users/1`)
  }

  //  update admin
  updateAdmin(admin:any){
    return this.http.put(`${this.SERVER_URL}/users/1`,admin)
  }
}
