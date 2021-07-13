import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  // styleUrls: ['./sprite.component.css']
})
export class AppComponent {
  title = 'app';


@Output("clicked")
public clicked:EventEmitter<void>=new EventEmitter<void>();

getClicked(){
  this.clicked.emit('clicked');
}
}
