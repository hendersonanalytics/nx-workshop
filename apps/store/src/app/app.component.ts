import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { formatRating } from '@bg-hoard/store/util-formatters';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }
  title = 'store';
  public games$;
  public game;

  ngOnInit() {
    this.games$ = this.http.get('/api/games').pipe(
      map((games: any[]) => {
        return games.map(game => {
          return {...game, rating: formatRating(game.rating)}
        });
      })
    );
  }
}
