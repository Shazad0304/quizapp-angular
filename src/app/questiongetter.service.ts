import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {IQuestion, IUsers, IResults} from './interfaceQuestion';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuestiongetterService {
currentUser:IResults
result:IResults[]

  constructor(private http: HttpClient) { }

  getQues(): Observable<IQuestion[]>{
    return this.http.get<IQuestion[]>('');
  }

  getUsers():Observable<IUsers[]>{
    return this.http.get<IUsers[]>('');
  }

  getPoints(){
    this.http.get<IResults[]>('').subscribe(x => this.result = x);
  }

  postPoints(data:IResults){
    this.result.push(data);
    this.http.put('',this.result,{
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }).subscribe(data => data,error => console.log(error));
  }
}
