import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUsers, IResults } from './interfaceQuestion';
import { QuestiongetterService } from './questiongetter.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {
  user:string
  pass:string
  data: IUsers[]
  constructor(private router:Router,private toastr: ToastrService,private getdata:QuestiongetterService) {
      this.getdata.getUsers().subscribe(x => this.data = x);
      this.getdata.getPoints();
   }

  canActivate(): boolean {
    if(this.data === undefined){
      this.router.navigate(['login']);
      return false;
    }
    else if(this.getdata.result.find(x => x.number == this.user)){
      this.toastr.error('You already attempted','',{
        timeOut: 2000
      })
      return false;
    }
    else if (this.data.find(x => x.user == this.user && x.pass.toLowerCase() == this.pass.toLowerCase())) {
      this.toastr.success('Login Successfull','',{
        timeOut: 2000
      })
      this.getdata.currentUser = {name:this.data.find(x => x.user == this.user && x.pass.toLowerCase() == this.pass.toLowerCase()).name,number:this.data.find(x => x.user == this.user && x.pass.toLowerCase() == this.pass.toLowerCase()).user};
      return true;
    }
    this.router.navigate(['login']);
    this.toastr.error('Invalid Credentials','',{
      timeOut: 2000
    })
    return false;
  }
}
