import { Injectable, Injector, Input } from "@angular/core";
import { IReusableService } from "./IReusableService";
import { SearchServiceTokens } from "./reusableServiceInjectionToken";

@Injectable({
  providedIn: "root",
})
export class ReusableServiceBService {
  @Input() useService: any;
  service!: IReusableService;

  constructor(private injector: Injector) {
    const serviceToUse = this.useService || "default";
    this.service = this.injector.get(SearchServiceTokens.get(serviceToUse));
  }

  getCurrentTime() {
    const time = new Date();
    console.log("Time by reusable service B is ", time);
  }
}
