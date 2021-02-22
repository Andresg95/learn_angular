import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//ROUTING
import { APP_ROUTING } from "./app.routes"

//SERVICES
import { HeroesService } from './services/heroes.service';

//COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';
import { SearchedHeroesComponent } from './components/searched-heroes/searched-heroes.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    HeroesComponent,
    HeroComponent,
    SearchedHeroesComponent,
    HeroCardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
