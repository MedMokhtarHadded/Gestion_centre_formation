import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormationService } from '../services/formation.service';


@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
 user!: any;
 formation!: any;
 affectedForm!: any
 formations:any;
num: any=1;
dateTime :any;
SERVER_URL: string = "http://localhost:8000";
hiddenButton=false;
  constructor( private route: ActivatedRoute,private httpClient: HttpClient, private formationService : FormationService) { }

  ngOnInit(): void {
/***************************************************** */
    let id=this.route.snapshot.params['id'];
   
    
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  this.dateTime = date+' '+time;


  const getRandomId = (min = 0, max = 9999) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const num =  Math.floor(Math.random() * (max - min + 1)) + min;
    return num.toString().padStart(6, "0")
  };
  
  console.log(getRandomId()); // 350845, 000845 
    // Genereates a number between 0 to 1;
Math.random();
// to gerate a randome rounded number between 1 to 10;
this.num= Math.floor(Math.random() * 10000) + 1;


/**************************************************************** */

    this.httpClient.get<{apprenant :any}>(`${this.SERVER_URL + '/api/apprenants'}/${id}`).subscribe(data => {
      this.user=data.apprenant; console.log(this.user);
      this.affectedForm=this.user.affectedFormation
      console.log( this.affectedForm);
      this.httpClient.get<{formation :any}>(`${this.SERVER_URL}/api/formationss/${this.affectedForm}`).subscribe(data => {
this.formation=data.formation
console.log(this.formation);






     })
 
       })
  }



/******************************************* */

  print(button:any){
 
    this.hiddenButton=true;
    setTimeout(()=>{window.print();this.hiddenButton=false;},100)
    
  }

}
