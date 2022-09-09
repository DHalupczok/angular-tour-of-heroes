import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ReusableServiceAService {

  constructor() {
  }

  getCurrentTime() {
    const time = new Date();
    console.log("Time by reusable service A is ", time);
  }
}
