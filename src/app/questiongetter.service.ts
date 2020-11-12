import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IQuestion, IUsers, IResults } from "./interfaceQuestion";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class QuestiongetterService {
  currentUser: IResults;
  Index: number;

  constructor(private http: HttpClient) {}

  Login(data) {
    return new Promise((resolve, reject) => {
      this.http.post("http://localhost:8080/auth/login", data).subscribe(
        (x) => {
          resolve(x);
        },
        (err) => reject(err)
      );
    });
  }

  Register(data) {
    return new Promise((resolve, reject) => {
      this.http.post("http://localhost:8080/auth/register", data).subscribe(
        (x) => {
          resolve(x);
        },
        (err) => reject(err)
      );
    });
  }

  getQuizBycode(code) {
    return new Promise((resolve, reject) => {
      this.http.get(`http://localhost:8080/quiz/get/${code}`).subscribe(
        (x) => {
          resolve(x);
        },
        (err) => reject(err)
      );
    });
  }

  saveAnswers(data) {
    return new Promise((resolve, reject) => {
      this.http.post("http://localhost:8080/quiz/saveanswer", data).subscribe(
        (x) => {
          resolve(x);
        },
        (err) => reject(err)
      );
    });
  }
}
