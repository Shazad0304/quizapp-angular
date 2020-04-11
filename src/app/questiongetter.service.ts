import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IQuestion} from './interfaceQuestion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestiongetterService {

  constructor(private http: HttpClient) { }

  getQues(): Observable<IQuestion[]>{
    return this.http.get<IQuestion[]>();
  }
}
