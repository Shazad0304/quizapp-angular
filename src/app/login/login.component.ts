import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthguardService } from '../authguard.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  number = new FormControl('', [Validators.required]);
  pass = new FormControl('', [Validators.required]);
  check = false;
  constructor(private auth:AuthguardService,private router:Router) { }

  ngOnInit(): void {

 
  }

  checkuser(){
    this.auth.user = this.number.value;
    this.auth.pass = this.pass.value;
    this.router.navigate(['main']);
  }
  proceed(){
    this.check = true;
  }

 

 

}
