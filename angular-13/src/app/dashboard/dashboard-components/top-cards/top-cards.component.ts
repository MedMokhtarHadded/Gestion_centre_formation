import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {topcard} from './top-cards-data';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html'
})
export class TopCardsComponent implements OnInit {
nbFormateurs!:any
nbAssistants!:any
nbFormations!:any
nbApprenants!:any




  
public topcards: topcard[] = [

] 



  constructor(private http: HttpClient) { 

    this.topcards=this.topcards;
  }

  ngOnInit(): void {
    this.http.get(`http://localhost:8000/api/userss/formateur`).subscribe((data:any) => {
      this.nbFormateurs=data.users.length
      console.log(this.nbFormateurs);


      this.http.get(`http://localhost:8000/api/userss/assistant`).subscribe((data:any) => {
        this.nbAssistants=data.users.length
        console.log(this.nbAssistants);
  
  
        this.http.get(`http://localhost:8000/api/formations`).subscribe((data:any) => {
          this.nbFormations=data.formations.length
          console.log(this.nbFormations);
    
    
    
          this.http.get(`http://localhost:8000/api/Apprenants`).subscribe((data:any) => {
            this.nbApprenants=data.apprenants.length
            console.log(this.nbApprenants);
      
      
      this.topcards=[
        

  {
    bgcolor: 'success',
    icon: 'bi bi-people',
    title: this.nbAssistants,
    subtitle: "Nombre d'assistants"
},
{
    bgcolor: 'danger',
    icon: 'bi-file-earmark-person',
    title: this.nbFormateurs ,
    subtitle: "Nombre de formateur"
},
{
    bgcolor: 'warning',
    icon: 'bi bi-person-workspace',
    title: this.nbApprenants,
    subtitle: "Nombre d'apprenants"
},
{
    bgcolor: 'info',
    icon: 'bi bi-book',
    title: this.nbFormations,
    subtitle: "Nombre de formations"
},
      ]
      
            
                 })
          
               })
  
        
             })

      
           })
  }

}
