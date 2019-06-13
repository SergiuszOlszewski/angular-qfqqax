import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TechnologiesListComponent } from './technologies-list/technologies-list.component';
import { TechnologiesDetailsComponent } from './technologies-details/technologies-details.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: TechnologiesListComponent },
        { path: 'tech/:techId', component: TechnologiesDetailsComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    TechnologiesListComponent,
    TechnologiesDetailsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
