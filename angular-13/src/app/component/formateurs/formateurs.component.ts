import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css']
})

export class FormateursComponent implements OnInit {
  user :any = {};
  nmbFormateur:any;
  isAdmin: boolean=false;
  connectedUser: any={};

  updatedUser :any = {
    firstName : '',
    lastName : '',
    email : '',
    password : '',
    cin : '',
    birthday : '',
    tel : '',
    salary : ''
  };
  addFormateurForm! : FormGroup;
  id:any;
  users:any;
  constructor( private formBuilder : FormBuilder, private userService : UserService) { }

  ngOnInit() {  this.connectedUser = JSON.parse(localStorage.getItem("user") || "[]");
  if (this.connectedUser.role == 'admin') {
    this.isAdmin=true
  }

    this.userService.getUsers().subscribe(res => this.users=res.users)
    
    this.addFormateurForm = this.formBuilder.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      password : [''],
      cin : [''],
      birthday : [''],
      tel : [''],
      salary : ['']
    })

   

  }


  addFormateur(){
      this.user.role ="formateur";
      this.userService.createUser(this.user).subscribe(
        (data)=>{
          console.log(data.message);
          this.users=[...this.users,this.user]
        }
      )
      let annuler= document.getElementById("annuler");
      annuler?.click();
    }

    public filter(formateurs: any[]){
      let res=[];
      for (let formateur of formateurs){
        if(formateur.role=="formateur")
        res.push(formateur);
      }
      return res;
    }

    deleteFormateur(id:any){
    
        this.userService.deleteUser(id).subscribe(
          (data)=>{
            console.log(data.message);
            this.userService.getUsers().subscribe(
              (data)=>{
                this.users = data.users
              }
            )
            
          }
        )
    }


  update(id:any){
    this.userService.getUser(id).subscribe(data => {
      data.user.password=''
      this.updatedUser=data.user;
    })
    

  }

  updateUser(){
    this.userService.updateUser(this.updatedUser).subscribe(data =>{console.log("user updated",data);
    this.users=[...this.users];} )
    
    let annuler2= document.getElementById("annuler2");
    annuler2?.click();
    window.location.reload()

  }

}