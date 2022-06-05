import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-assistants',
  templateUrl: './assistants.component.html',
  styleUrls: ['./assistants.component.css']
})
export class AssistantsComponent implements OnInit {
  user :any = {
    firstName : '',
    lastName : '',
    email : '',
    password : '',
    cin : '',
    birthday : '',
    tel : '',
    salary : ''
  };
  nmbFormateur:any;
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
  id2:any;
  constructor( private formBuilder : FormBuilder, private userService : UserService) { }

  ngOnInit() {


    this.userService.getUsers().subscribe(data => this.users=data.users)
    
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
      this.user.role ="assistant";
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
        if(formateur.role=="assistant")
        res.push(formateur);
      }
      return res;
    }
    updateId(id:any){
      this.id2=id;
    }

    deleteFormateur(){
    
        this.userService.deleteUser(this.id2).subscribe(
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
    this.userService.updateUser(this.updatedUser).subscribe(data => console.log("user updated",data));
    let annuler2= document.getElementById("annuler2");
    annuler2?.click();
    window.location.reload()
  }

  falseEmail(){
if(this.updatedUser.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)==null){
console.log(true)
  return true;
}
console.log(false);
return false;
}

falseEmail2(){
if(this.user.email=="")
return false;
  if(this.user.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)==null){
  console.log(true)
    return true;
  }
  console.log(false);
  return false;
  }

}
