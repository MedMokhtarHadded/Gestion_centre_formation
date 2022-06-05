import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApprenantService } from '../../services/apprenant.service';



@Component({
  selector: 'app-consulter-apprenant',
  templateUrl: './consulter-apprenant.component.html',
  styleUrls: ['./consulter-apprenant.component.css']
})




export class ConsulterApprenantComponent implements OnInit {
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

    this.apprenantService.getApprenants().subscribe(data => this.apprenants=data.apprenants.filter((a:any )=>a.affectedFormation=="Mean Stack"))
  
  }


  addApprenant(){
    
      this.apprenantService.createApprenant(this.apprenant).subscribe(
        (data)=>{
          console.log(data.message);
          this.apprenants=[...this.apprenants,this.apprenant];
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
      this.updatedApprenant=data.apprenant;
    })
    

  }

  updateApprenant(){
    this.apprenantService.updateApprenant(this.updatedApprenant).subscribe(data => console.log("Apprenant updated",data))
  }

  facture(id: any){
    this.router.navigate(['/facture', id]);
  }


}

