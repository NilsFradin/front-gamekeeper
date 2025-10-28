import { Component, OnInit } from '@angular/core';
import { GamekeeperService } from '../../services/gamekeeper';

@Component({
  selector: 'app-games-list',
  templateUrl: './game-list.html',
})
export class GameList implements OnInit {
  games: any[] = [];

  constructor(private gameService: GamekeeperService) {}

  ngOnInit() {
    this.gameService.getGames().subscribe({
      next: (data) => (this.games = data),
      error: (err) => console.error('Erreur API', err)
    });
  }
}
