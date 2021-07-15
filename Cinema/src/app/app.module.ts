import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HallComponent } from './hall.component';
import { CashComponent } from './cash.component';


@NgModule({
  declarations: [
    AppComponent, HallComponent, CashComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
