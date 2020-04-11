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
    return this.http.get<IQuestion[]>();
  }

  getUsers():Observable<IUsers[]>{
    return this.http.get<IUsers[]>();
  }
}
