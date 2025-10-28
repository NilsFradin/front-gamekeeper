import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { GameList } from './components/game-list/game-list';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'games', component: GameList },
  { path: '**', redirectTo: '' } // redirection si route inconnue
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
