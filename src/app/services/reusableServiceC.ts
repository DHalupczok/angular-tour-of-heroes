import { IReusableService } from "./IReusableService";

export class ReusableServiceC implements IReusableService {
  getCurrentTime() {
    const time = new Date();
    console.log("Time by reusable service C is ", time);
  }
}
