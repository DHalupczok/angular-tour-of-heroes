import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ReusableServiceAService {

  constructor() {
  }

  getCurrentTime() {
    console.log("Hello I'm reusable Service A ");
  }
}
