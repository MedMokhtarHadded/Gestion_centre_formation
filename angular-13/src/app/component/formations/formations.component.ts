import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormationService } from '../../services/formation.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {
  currentDay:any;
  formation :any = {};
  nmbFormation:any;
  updatedFormation :any = {
    typeFormation:  '',
    duration : '',
    start :  '',
    end :  '',
    formateur:  '',
    price:  '',
  };
  id:any;
  formations:any;

  finished:boolean=false;
  notStarted:boolean=false;
  ongoing:boolean=false;
  constructor( private formBuilder : FormBuilder, private formationService : FormationService) { }

  
  ngOnInit(): void { 
    
    this.currentDay=new Date();
    this.formationService.getFormations().subscribe(data => {
      this.formations=data.formations;
    })
  }


  addFormation(){
    
      this.formationService.createFormation(this.formation).subscribe(
        (data)=>{
          console.log(data.message);
          // this.formations=[...this.formations,this.formation];
          window.location.reload()

        }
      )
    }

/*************************************************************** */
    deleteFormation(id:any){
    
        this.formationService.deleteFormation(id).subscribe(
          (data)=>{
            console.log(data.message);
            this.formationService.getFormations().subscribe(
              (data)=>{
                this.formations = data.formations
              }
            )
            
          }
        )
    }


  update(id:any){
    console.log("hello2");
    this.formationService.getFormation(id).subscribe(data => {
      this.updatedFormation=data.formation;
    })
  }

  updateFormation(){
    this.formationService.updateFormation(this.updatedFormation).subscribe(data => console.log("formation updated",data))
    window.location.reload()

  }


  checkDate(dateDebut:any, dateFin: any){
    var today = new Date();
    dateDebut=new Date(dateDebut)
    dateFin=new Date(dateFin)
    if(dateFin.getTime()<today.getTime())
    return ("finished")
    if(dateDebut.getTime()>today.getTime())
    return ("notStarted")
    return ("onGoing")
  }

  }
