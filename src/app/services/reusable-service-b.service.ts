import { Injectable } from "@angular/core";


@Injectable({
  providedIn: "root",
})
export class ReusableServiceBService {


  constructor() {
  }

  getCurrentTime() {
    console.warn("Hello I'm reusable Service B ");
  }
}
