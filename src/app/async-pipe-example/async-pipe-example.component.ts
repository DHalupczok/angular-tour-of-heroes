import { Component } from "@angular/core";
import { Observable, Observer } from "rxjs";

@Component({
  selector: "app-async-pipe-example",
  template: "<p>Async data status:{{ data | async }}</p>",
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


  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  observable = new Observable(function subscribe(subscriber) {
    const id = setInterval(() => {
      subscriber.next("hi");
    }, 1000);
  });

  constructor() {
  }

  private randomNumber = () => Math.floor(Math.random()) * 10;


}
