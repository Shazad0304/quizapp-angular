import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUsers } from './interfaceQuestion';
import { QuestiongetterService } from './questiongetter.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {
  user:number
  pass:string
  data: IUsers[]
  constructor(private router:Router,private toastr: ToastrService,private getdata:QuestiongetterService) {
      this.getdata.getUsers().subscribe(x => this.data = x);
   }

  canActivate(): boolean {
    if(this.data === undefined){
      this.router.navigate(['login']);
      return false;
    }
    else if (this.data.find(x => x.user == this.user && x.pass == this.pass)) {
      this.toastr.success('Login Successfull','',{
        timeOut: 2000
      })
      return true;
    }
    this.router.navigate(['login']);
    this.toastr.error('Invalid Credentials','',{
      timeOut: 2000
    })
    return false;
  }
}
