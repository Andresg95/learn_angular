import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { Hero, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
  ]
})
export class HeroComponent {

  hero: any = {};

  constructor(private activatedRoute: ActivatedRoute,
    private heroService: HeroesService) {

    this.activatedRoute.params.subscribe(params => {
        this.hero = this.heroService.getHero(params["id"])
        console.log(this.hero, "ok...")
    })
  }



}
