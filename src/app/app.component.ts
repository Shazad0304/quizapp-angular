import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestiongetterService } from './questiongetter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Shazad';
  

  constructor(private router:Router){

  }

  get user(){
    return localStorage.getItem("quiz-user");
  }

  logout(){
      localStorage.removeItem("quiz-user");
      window.location.replace("/login");
  }
}
