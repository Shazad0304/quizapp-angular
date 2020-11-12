import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthguardService } from '../authguard.service';
import { Router} from '@angular/router';
import { QuestiongetterService } from '../questiongetter.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  roles = ["Teacher","Student"]
  //Login
  number = new FormControl('', [Validators.required,Validators.email]);
  pass = new FormControl('', [Validators.required]);

  //Regsiter
  fname = new FormControl('', [Validators.required]);
  lname = new FormControl('', [Validators.required]);
  password  = new FormControl('', [Validators.required]);
  cpassword  = new FormControl('', [Validators.required]);
  email = new FormControl('', [,Validators.email]);
  userRole = new FormControl('', [Validators.required]);
  code = new FormControl('', [Validators.required]);

  check = false;
  showcode = false;
  constructor(private auth:AuthguardService,private router:Router,private data:QuestiongetterService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.check = false;
    this.showcode = false;

    if(localStorage.getItem("quiz-user")){
      this.showcode = true;
    }
  }


  checkuser(){
    this.data.Login({email:this.number.value,password:this.pass.value}).then(x => {
      console.log(x);
      localStorage.setItem("quiz-user",JSON.stringify(x));
      this.toastr.success("Login successful")
      this.showcode = true;
    })
    .catch(err => {
      this.toastr.error("User Not Found")
    })
  }

  register(){
    let payload = {
      email:this.email.value,
      password:this.password.value,
      firstname:this.fname.value,
      lastname:this.lname.value,
      usertype:this.userRole.value
    }
    this.data.Register(payload).then(x => {
      console.log(x);
      this.toastr.success("Registration successful")
    }).catch(err => {
      console.log(err);
      this.toastr.error("Something went wrong")
    })
  }
  proceed(){
    this.check = true;
  }

  beginQuiz(){
    if(this.code.value !== ''){
      this.router.navigate([`/main/${this.code.value}`])
    }
    else{
      this.toastr.error("Please enter valid code")
    }
  }

}
