import { Component, OnInit, Input } from "@angular/core";
import { HeroCacheService } from "../hero-cache.service";

@Component({
  selector: "app-hero-bio",
  template: `
    <h4>{{hero.name}}</h4>
    <ng-content></ng-content>
    <textarea cols="25" [(ngModel)]="hero.description"></textarea>`,
  providers: [HeroCacheService],
})

export class HeroBioComponent implements OnInit {
  @Input() heroId = 0;

  constructor(private heroCache: HeroCacheService) {
  }

  get hero() {
    return this.heroCache.hero;
  }

  ngOnInit() {
    this.heroCache.fetchCachedHero(this.heroId);
  }
}
