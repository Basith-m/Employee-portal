import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './users.model';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  SERVER_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  // add-user API
  addUserAPI(user: UserModel) {
    return this.http.post(`${this.SERVER_URL}/users`, user);
  }

  // get all user API
  getAllUserAPI(){
    return this.http.get(`${this.SERVER_URL}/users`);
  }

  // delete user
  deleteUserAPI(id:string){
    return this.http.delete(`${this.SERVER_URL}/users/${id}`)
  }

  // view a user API
  viewUserAPI(id:any){
    return this.http.get(`${this.SERVER_URL}/users/${id}`)
  }

  // edit user API
  updateUserAPI(id:any,user:UserModel){
    return this.http.put(`${this.SERVER_URL}/users/${id}`,user)
  }
}
