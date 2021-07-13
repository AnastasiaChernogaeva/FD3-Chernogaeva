import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SpriteComponent } from './sprite.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent, SpriteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
