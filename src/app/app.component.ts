import { Component } from '@angular/core';

@Component({
  selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tour of heroes';
  componentList = ['whatever', 'app-some-h2', 'app-some-h3', 'app-some-h4'];

  getElementClass(index: number) {
    return this.componentList[index];
  }
}
