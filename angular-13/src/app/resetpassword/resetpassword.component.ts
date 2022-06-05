import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Validators } from '@angular/forms';
import { MustMatch } from '../confirmPwd';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  form!: FormGroup;
  id:any;

  constructor(private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private service: UserService) { 
    
  }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    
    this.form=this.formBuilder.group({
      password : ['',[Validators.minLength(8),Validators.required]],
      confirmPassword : ['',[Validators.required]],
    }),   {
      // Appel de la fonction
      validator : MustMatch("password", "confirmPassword")
    }
  }

  reset(){ this.service.getUser(this.id).subscribe(data=>{
    console.log(this.form.value.password);
    console.log(data.user);
   data.user.password=this.form.value.password;
    this.service.updateUser(data.user).subscribe()
    this.router.navigate([''])
  })
  
  }

}
