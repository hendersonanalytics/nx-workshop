import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: GameDetailComponent }
    ])
  ],
  declarations: [GameDetailComponent],
  exports: [GameDetailComponent],
})
export class StoreFeatureGameDetailModule {}
