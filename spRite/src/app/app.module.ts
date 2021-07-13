import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SpriteComponent } from './sprite.component';
// import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    SpriteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [SpriteComponent]
})
export class AppModule { }
