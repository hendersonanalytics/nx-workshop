import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { StoreUiSharedModule } from '@bg-hoard/store/ui-shared';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    MatCardModule,
    StoreUiSharedModule,
    RouterModule.forRoot([
      {
        path: 'game/:id', // <---- HERE
        loadChildren: () =>
            import('@bg-hoard/store/feature-game-detail').then(m => m.StoreFeatureGameDetailModule)
        }
    ], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
