import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
public email!: String;
form! : FormGroup;
notExist : Boolean = false ;
exist : Boolean = false ;
  constructor(private http : HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(): void { 
    this.form = this.formBuilder.group({
      email: ''
    });
  }

  forget(){
    console.log(this.form.getRawValue());
   
    this.http.post('http://localhost:8000/api/forget-password',this.form.getRawValue()).subscribe((res: any) => {
     console.log(res);
   res.status=="NOK"
      console.log(res.etat);
   this.notExist=false;
   this.exist=true;
    },
    err=>{ this.notExist=true;
    this.exist=false}
    )
  }
}
