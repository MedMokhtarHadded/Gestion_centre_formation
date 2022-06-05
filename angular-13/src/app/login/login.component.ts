
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Déclaration des variables globales
  title!: String;
  image! :String;

  user : any = {};
  notExist : Boolean = false ;
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  submit(): void {
    this.http.post('http://localhost:8000/api/login', this.form.getRawValue(), {
      withCredentials: true
    }).subscribe((res: any) => {
      console.log(res.status)
      localStorage.setItem("token",res.token)
      localStorage.setItem("user", JSON.stringify(res.user))
      let findedUser=res.user;
      console.log(res.user);
      
      switch (findedUser.role) {
        case "formateur":
          this.router.navigate(['/component/consulter-apprenant']);
          break;
        
          case "admin":
          this.router.navigate(['/dashboard']);
          break;

          case "assistant":
            this.router.navigate(['/component/formateurs']);
            break;
      
        default:
          console.log("error");
          break;
      }
    },  (err:any)=>this.notExist=true );
  }
}

