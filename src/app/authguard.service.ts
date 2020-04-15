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
  results: IResults[]
  constructor(private router:Router,private toastr: ToastrService,private getdata:QuestiongetterService) {
      this.getdata.getUsers().subscribe(x =>{ 
        this.data = x;
      });
      this.getdata.getPoints().subscribe(x => {
        this.results = x;
      });
   }

  canActivate(): boolean {
    if(this.data === undefined){
      this.router.navigate(['login']);
      return false;
    }
    else if(this.results.find(x => x.user == this.user)){
      this.toastr.error('You already attempted','',{
        timeOut: 2000
      })
      return false;
    }
    else if (this.data.find(x => x.user == this.user && x.pass.toLowerCase() == this.pass.toLowerCase())) {
      this.toastr.success('Login Successfull','',{
        timeOut: 2000
      })
      this.getdata.Index = this.results.length;
      const temp= this.data.find(x => x.user == this.user && x.pass.toLowerCase() == this.pass.toLowerCase());
      this.getdata.currentUser = {name:temp.name,user:temp.user};
      return true;
    }
    this.router.navigate(['login']);
    this.toastr.error('Invalid Credentials','',{
      timeOut: 2000
    })
    return false;
  }
}
