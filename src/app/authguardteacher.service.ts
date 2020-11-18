import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthguardteacherService {
  entity: any = JSON.parse(localStorage.getItem("quiz-user"));
  constructor() {}

  canActivate(): boolean {
    if (this.entity && this.entity.type.toLowerCase() === "teacher") {
      return true;
    } else {
      return false;
    }
  }
}
