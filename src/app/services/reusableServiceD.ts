import { IReusableService } from "./IReusableService";

export class ReusableServiceD implements IReusableService {
  getCurrentTime() {
    const time = new Date();
    console.log("Time by reusable service D is ", time);
  }
}
