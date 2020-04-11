import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IQuestion, IUsers} from './interfaceQuestion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestiongetterService {
currentUser:string

  constructor(private http: HttpClient) { }

  getQues(): Observable<IQuestion[]>{
    return this.http.get<IQuestion[]>('https://fantasy-b286e.firebaseio.com/quizs.json');
  }

  getUsers():Observable<IUsers[]>{
    return this.http.get<IUsers[]>('https://fantasy-b286e.firebaseio.com/users.json');
  }
}
