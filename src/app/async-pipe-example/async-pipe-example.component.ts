import { Component } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-async-pipe-example",
  templateUrl: "./async-pipe-example.component.html",
  styleUrls: ["./async-pipe-example.component.scss"],
})
export class AsyncPipeExampleComponent {

  public data = new Observable(subscriber => {
    const observer = () => {
      console.log("Observer się wykonuje");
      return Math.floor(Math.random() * 10) < 5 ? "Server returned apples" : "Server returned bananas";
    };
    setInterval(() => subscriber.next(observer()), 2000);
  });

  constructor() {
  }


}
