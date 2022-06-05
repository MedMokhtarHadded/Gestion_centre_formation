import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SalleFormationService } from '../../services/salle-formation.service';

@Component({
  selector: 'app-salles-formations',
  templateUrl: './salles-formations.component.html',
  styleUrls: ['./salles-formations.component.css']
})

export class SallesFormationsComponent implements OnInit {
  salleFormation :any = {};
  nmbSalleFormation:any;
  updatedSalleFormation :any = {
    _id:  '',
    numSalle:  '',
    nmbPlaces : ''
  };
  id:any;
  sallesFormations:any;
  constructor( private formBuilder : FormBuilder, private salleFormationService : SalleFormationService ) { }

  ngOnInit(): void {

    this.salleFormationService.getSallesFormations().subscribe(data => this.sallesFormations=data.sallesFormations)
    
  
  }


  addSalleFormation(){
    
      this.salleFormationService.createSalleFormation(this.salleFormation).subscribe(
        (data)=>{
          console.log(data.message);
          this.sallesFormations=[...this.sallesFormations,this.salleFormation]; 
             window.location.reload()

        }
      )
    }
    

     deleteSalleFormation(id:any){
       
        this.salleFormationService.deleteSalleFormation(id).subscribe(
        (data)=>{
            console.log(data.message);
           this.salleFormationService.getSallesFormations().subscribe(
             (data)=>{
                this.sallesFormations = data.sallesFormations
              }
             )
            
          }
       )
    }


   update(id:any){
    console.log("hello2");
   this.salleFormationService.getSalleFormation(id).subscribe(data => {
      this.updatedSalleFormation=data.salleFormation;
   })
    

}

 updateSalleFormation(){
  
   console.log(this.updatedSalleFormation);
   
   this.salleFormationService.updateSalleFormation(this.updatedSalleFormation).subscribe(data => console.log("formation updated",data),
   (err:any)=>console.log(err)
   
   )
   window.location.reload()

 }
  }
