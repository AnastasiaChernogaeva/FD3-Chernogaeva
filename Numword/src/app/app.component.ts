import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Numword';

  public apples:number=0;


    numberFunction(ev:any) {
        this.apples=ev.value;
    }

    getApples(){
      return this.apples;
    }
}
