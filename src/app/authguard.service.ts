import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUsers, IResults } from './interfaceQuestion';
import { QuestiongetterService } from './questiongetter.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  entity:any = JSON.parse(localStorage.getItem("quiz-user"));
  constructor(private router:Router,private toastr: ToastrService,private getdata:QuestiongetterService) {

   }

  canActivate(): boolean {
      if(this.entity && this.entity.type.toLowerCase() === "student"){
        return true;
      }
      else{
        return false;
      }
  }
}
