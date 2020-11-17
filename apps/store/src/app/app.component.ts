import { Component, OnInit } from '@angular/core';

import { getAllGames, getGame} from '../fake-api';
import { formatRating } from '@bg-hoard/store/util-formatters';


@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'store';
  public games;
  public game;

  ngOnInit() {
    this.games = getAllGames().map((game) => {
      return {...game, rating: formatRating(game.rating)};
    });
  }
}
