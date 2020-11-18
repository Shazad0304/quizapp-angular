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

  baseurl = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  Login(data) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.baseurl}/auth/login`, data).subscribe(
        (x) => {
          resolve(x);
        },
        (err) => reject(err)
      );
    });
  }

  Register(data) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.baseurl}/auth/register`, data).subscribe(
        (x) => {
          resolve(x);
        },
        (err) => reject(err)
      );
    });
  }

  getQuizBycode(code) {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.baseurl}/quiz/get/${code}`).subscribe(
        (x) => {
          resolve(x);
        },
        (err) => reject(err)
      );
    });
  }

  saveAnswers(data) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.baseurl}/quiz/saveanswer`, data).subscribe(
        (x) => {
          resolve(x);
        },
        (err) => reject(err)
      );
    });
  }

  getAllQuizByUser(id){
    return new Promise((resolve, reject) => {
      this.http.get(`${this.baseurl}/quiz/getall/${id}`).subscribe(
        (x) => {
          resolve(x);
        },
        (err) => reject(err)
      );
    });
  }

  getAllScoreBycode(code){
    return new Promise((resolve, reject) => {
      this.http.get(`${this.baseurl}/quiz/getallanswers/${code}`).subscribe(
        (x) => {
          resolve(x);
        },
        (err) => reject(err)
      );
    });
  }

  AddQuiz(data){
    return new Promise((resolve, reject) => {
      this.http.post(`${this.baseurl}/quiz/add`, data).subscribe(
        (x) => {
          resolve(x);
        },
        (err) => reject(err)
      );
    });
  }

  delquiz(code){
    return new Promise((resolve, reject) => {
      this.http.delete(`${this.baseurl}/quiz/delete/${code}`).subscribe(
        (x) => {
          resolve(x);
        },
        (err) => reject(err)
      );
    });
  }
}
