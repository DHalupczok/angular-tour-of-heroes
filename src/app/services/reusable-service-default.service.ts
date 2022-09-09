import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ReusableServiceDefaultService {

  constructor() {
  }

  getCurrentTime() {
    const time = new Date();
    console.log("Time by default reusable service is ", time);
  }
}
