import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {IQuestion, IUsers, IResults} from './interfaceQuestion';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuestiongetterService {
currentUser:IResults
Index:number

  constructor(private http: HttpClient) { }

  getQues(): Observable<IQuestion[]>{
    return this.http.get<IQuestion[]>('');
  }

  getUsers():Observable<IUsers[]>{
    return this.http.get<IUsers[]>('');
  }

  getPoints():Observable<IResults[]>{
    return this.http.get<IResults[]>('');
  }


  postPoints(data:IResults){
    this.http.patch('',{[this.Index]:data},{
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }).subscribe(data => data,error => console.log(error));
  }
}
