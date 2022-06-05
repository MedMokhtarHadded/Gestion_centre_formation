import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html'
})








export class TopSellingComponent implements OnInit {


  nbFormateurs:any
  nbAssistants:any
  assistantImage= 'assets/images/users/user3.jpg'
  formateurImage= 'assets/images/users/user2.jpg'
  statusAssistant='success'
  statusFormateur= 'danger'




public users: any[] = [
    {
        image: 'assets/images/users/user4.jpg',
        uname: 'Mokhtar Hadded',
        gmail: 'med.mokh3@gmail.com',
        birthday: '1999-12-01',
        status: 'info',
        cin: 11423712,
        tel: '46521051'
    }
  
]







  topSelling:any[];

  constructor(private http: HttpClient) { 

    this.topSelling=this.users;
  }

  ngOnInit(): void {

    
    this.http.get(`http://localhost:8000/api/userss/assistant`).subscribe((data:any) => {
      this.nbFormateurs=data.users
      this.updateTab(data.users,'assistant')

      this.http.get(`http://localhost:8000/api/userss/formateur`).subscribe((data:any) => {
        this.nbAssistants=data.users


        this.updateTab(data.users,'formateur')
        

  })
})

}

updateTab(liste:any, type:any){
let image:any
let status:any
let user={
  image: '',
uname: '',
gmail: '',
birthday: '',
status: '',
cin: 0,
tel: ''}

if(type=="assistant"){
  image=this.assistantImage
  status=this.statusAssistant
}

else{  image=this.formateurImage
  status=this.statusFormateur

}
 for(let x of liste){
   user.image=image;
   user.uname=x.firstName+' '+x.lastName;
   user.gmail=x.email
   user.birthday=x.birthday
   user.status=status
   user.cin=x.cin
   user.tel=x.tel
   this.users.push(Object.assign({},user))
 }

}
}
