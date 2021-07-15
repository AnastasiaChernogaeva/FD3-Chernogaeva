import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{AppComponent} from './app.component';
import { numword } from './numWord.pipe';


@NgModule({
  imports: [ BrowserModule,  ],
  declarations: [
    AppComponent, numword
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
