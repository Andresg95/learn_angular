import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../services/heroes.service';
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-searched-heroes',
  templateUrl: './searched-heroes.component.html',
  styles: [
  ]
})
export class SearchedHeroesComponent implements OnInit {

  heroes: Hero[] = [];
  term:string= "";
  constructor(private _heroesService: HeroesService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe(params =>{
      this.term = params["term"]
      this.heroes = this._heroesService.getSearchHeroes(params["term"])
      console.log(this.heroes, "ok...2")
    }

      )
  }
}
