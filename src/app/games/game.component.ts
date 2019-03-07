import { Component, NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {Game} from './Game'
@Component({
  selector: 'app-game',
  template: `
  <h1>{{title}}</h1>
  <div class="card" *ngFor="let game of games">
    <h2 class="card-block">{{game.name}}</h2>
    <p class="card-title">{{game.description}}</p>
    <p class="card-title">Type: {{game.type}}</p>
  </div>
  `
})
export class GameComponent {
  title = 'Maddy\'s Games';
  games: Game[];
  constructor() {
    this.games = [
    new Game("Cricket","An Amazing Game","Outdoor"),
     new Game("Football","Football Amazing Game","Outdoor"),
      new Game("Chess","Chess Amazing Game","Coins")   
    ];
  }
}