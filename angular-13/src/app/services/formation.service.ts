import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  // SERVER_URL: string = "http://localhost:8080/api/";
  SERVER_URL: string = "http://localhost:8000";

  constructor(private httpClient: HttpClient) { }

  // Get all formations
  public getFormations(){ 
    return this.httpClient.get<{formations :any}>(this.SERVER_URL + '/api/formations');
  }

  // Get Formation By id
  public getFormation(formationId: any){
    return this.httpClient.get<{formation :any}>(`${this.SERVER_URL + '/api/formations'}/${formationId}`); 
  }

  // Create Formation
  public createFormation(formation: any){
    return this.httpClient.post<{message:any}>(`${this.SERVER_URL + '/api/formations'}`, formation)
  }

  // Delete Formation
  public deleteFormation(formationId: any){
    return this.httpClient.delete<{message : any}>(`${this.SERVER_URL + '/api/deleteFormation'}/${formationId}`)
  }

  public updateFormation(formation: any){
    return this.httpClient.put<{message : any}>(`${this.SERVER_URL + '/api/formations'}/${formation._id}`, formation)
}
}
