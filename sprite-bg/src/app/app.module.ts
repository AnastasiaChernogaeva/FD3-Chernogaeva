import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpriteBG } from './sprite.attr.directive';


@NgModule({
  declarations: [
    AppComponent, SpriteBG
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
});
export class AppModule { }
