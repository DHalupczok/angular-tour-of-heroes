import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ReusableServiceDefaultService {

  constructor() {
  }

  getCurrentTime() {
    console.log("Hello I'm default reusable Service ");
  }
}
