import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApprenantService } from '../../services/apprenant.service';

@Component({
  selector: 'app-apprenants',
  templateUrl: './apprenants.component.html',
  styleUrls: ['./apprenants.component.css']
})

export class ApprenantsComponent implements OnInit {
  isAdmin:any;
  isNotFormateur:boolean=false
  connectedUser:any;
  apprenant :any = {};
  nmbApprenant:any;
  updatedApprenant :any = {
    firstName : '',
    lastName : '',
    email : '',
    cin : '',
    birthday : '',
    tel : '',
    affectedFormation : ''
  };
  id:any;
  apprenants:any;
  constructor( private apprenantService : ApprenantService,private router: Router) {   }

  ngOnInit(): void {
    this.connectedUser = JSON.parse(localStorage.getItem("user") || "[]");
    if (this.connectedUser.role == 'admin') {
      this.isAdmin=true
    }

    this.apprenantService.getApprenants().subscribe(data => this.apprenants=data.apprenants)
  
  }


  addApprenant(){
    
      this.apprenantService.createApprenant(this.apprenant).subscribe(
        (data)=>{
          console.log(data.message);
          this.apprenants=[...this.apprenants,this.apprenant];
          
      // let annuler= document.getElementById("annuler");
      // annuler?.click();

      window.location.reload()

        }
      )
    }
    

  deleteApprenant(id:any){
        this.apprenantService.deleteApprenant(id).subscribe(
          (data)=>{
            console.log(data.message);
            this.apprenantService.getApprenants().subscribe(
              (data)=>{
                this.apprenants = data.apprenants
              }
            )
            
          }
        )
    }


  update(id:any){
    console.log("hello2");
    this.apprenantService.getApprenant(id).subscribe(data => {
      this.apprenant=data.apprenant;
      console.log(data.apprenant)
    })
    

  }

  updateApprenant(){
    this.apprenantService.updateApprenant(this.apprenant).subscribe(data => {
       console.log("Apprenant updated",data);
       this.apprenantService.getApprenants().subscribe(data => this.apprenants=data.apprenants)
      })
    // let annuler2= document.getElementById("annuler2");
    // annuler2?.click();
    window.location.reload()

  }

  facture(id: any,affectedForm:any){
    this.router.navigate(['/facture', id,affectedForm]);
  }
}
