import { IReusableService } from "./IReusableService";

export class ReusableServiceD implements IReusableService {
  getCurrentTime() {
    console.warn("Hello I'm reusable Service D ");
  }
}
