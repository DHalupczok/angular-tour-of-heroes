import { Component, OnInit, Input, Injector } from "@angular/core";
import { ReusableServiceDefaultService } from "../services/reusable-service-default.service";
import { SearchServiceTokens } from "../services/reusableServiceInjectionToken";
import { IReusableService } from "../services/IReusableService";

@Component({
  selector: "app-select-input",
  templateUrl: "./select-input.component.html",
  styleUrls: ["./select-input.component.scss"],
})
export class SelectInputComponent implements OnInit {
  @Input() inputData = [""];
  @Input() labelName = "";
  @Input() isNotIndexed = false;
  @Input() inputId = "";
  @Input() useService!: string;
  service!: IReusableService;

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    const serviceToUse = this.useService || "default";
    this.service = this.injector.get(SearchServiceTokens.get(serviceToUse));
  }

  logTime() {
    this.service.getCurrentTime();
  }
}