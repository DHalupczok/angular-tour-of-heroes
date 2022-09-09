import { Injectable } from "@angular/core";
import { HeroService } from "./hero.service";


@Injectable()
export class HeroCacheService {
  hero!: Hero;

  constructor(private heroService: HeroService) {
  }

  fetchCachedHero(id: number) {
    if (!this.hero) {
      this.hero = this.heroService.getHeroById(id);
    }
    return this.hero;
  }
}
