import { IReusableService } from "./IReusableService";

export class ReusableServiceC implements IReusableService {
  getCurrentTime() {
    console.log("Hello I'm reusable Service C ");
  }
}
