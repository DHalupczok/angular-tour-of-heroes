import { Injectable } from "@angular/core";

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
