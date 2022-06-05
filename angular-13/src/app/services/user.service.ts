
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // SERVER_URL: string = "http://localhost:8080/api/";
  SERVER_URL: string = "http://localhost:8000";

  constructor(private httpClient: HttpClient) { }

  // Get all users
  public getUsers(){ 
    return this.httpClient.get<{users :any}>(this.SERVER_URL + '/api/users');
  }

  // Get User By id
  public getUser(userId: any){
    return this.httpClient.get<{user :any}>(`${this.SERVER_URL + '/api/users'}/${userId}`); 
  }

  // Create User
  public createUser(user: any){
    return this.httpClient.post<{message:any}>(`${this.SERVER_URL + '/api/users'}`, user)
  }

  
  //login
  public login(user: any){
    return this.httpClient.post<{findedUser:any}>(`${this.SERVER_URL + '/api/login'}`, user)
  }

  // Delete User
  public deleteUser(userId: any){
    return this.httpClient.delete<{message : any}>(`${this.SERVER_URL + '/api/deleteUser'}/${userId}`)
  }

  //Edit user
  public updateUser(user: any){
    return this.httpClient.put<{message : any}>(`${this.SERVER_URL + '/api/users'}/${user._id}`, user)
}
}
