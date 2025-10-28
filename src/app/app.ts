import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MainLayout } from './layouts/main-layout/main-layout';
import { Home } from './components/home/home';
import { GameList } from './components/game-list/game-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainLayout, Home, GameList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend-gamekeeper');
}
