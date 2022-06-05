import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApprenantService {

  // SERVER_URL: string = "http://localhost:8080/api/";
  SERVER_URL: string = "http://localhost:8000";

  constructor(private httpClient: HttpClient) { }

  // Get all apprenants
  public getApprenants(){ 
    return this.httpClient.get<{apprenants :any}>(this.SERVER_URL + '/api/apprenants');
  }

  // Get Apprenant By id
  public getApprenant(apprenantId: any){
    return this.httpClient.get<{apprenant :any}>(`${this.SERVER_URL + '/api/apprenants'}/${apprenantId}`); 
  }

  // Create Apprenant
  public createApprenant(apprenant: any){
    return this.httpClient.post<{message:any}>(`${this.SERVER_URL + '/api/apprenants'}`, apprenant)
  }

  public login(apprenant: any){
    return this.httpClient.post<{findedApprenant:any}>(`${this.SERVER_URL + '/api/login'}`, apprenant)
  }

  // Delete Apprenant
  public deleteApprenant(apprenantId: any){
    return this.httpClient.delete<{message : any}>(`${this.SERVER_URL + '/api/deleteApprenant'}/${apprenantId}`)
  }

  public updateApprenant(apprenant: any){
    return this.httpClient.put<{message : any}>(`${this.SERVER_URL + '/api/apprenants'}/${apprenant._id}`, apprenant)
}
}