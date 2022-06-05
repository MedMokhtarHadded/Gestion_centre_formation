import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class SalleFormationService {

  // SERVER_URL: string = "http://localhost:8080/api/";
  SERVER_URL: string = "http://localhost:8000";

  constructor(private httpClient: HttpClient) { }

  // Get all salles formations
  public getSallesFormations(){ 
    return this.httpClient.get<{sallesFormations :any}>(this.SERVER_URL + '/api/sallesFormations');
  }

  // Get salle Formation By id
  public getSalleFormation(salleFormationId: any){
    return this.httpClient.get<{salleFormation :any}>(`${this.SERVER_URL + '/api/sallesFormations'}/${salleFormationId}`); 
  }

  // Create salle Formation
  public createSalleFormation(salleFormation: any){
    return this.httpClient.post<{message:any}>(`${this.SERVER_URL + '/api/sallesFormations'}`, salleFormation)
  }

  // Delete salle Formation
  public deleteSalleFormation(salleFormationId: any){
    return this.httpClient.delete<{message : any}>(`${this.SERVER_URL + '/api/salleFormation'}/${salleFormationId}`)
  }

    // update salle Formation
  public updateSalleFormation(salleFormation: any){
    return this.httpClient.put<{message : any}>(`${this.SERVER_URL + '/api/sallesFormations'}/${salleFormation._id}`, salleFormation)
}
}
