
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


@Output("clicked")
public clicked:EventEmitter<string>=new EventEmitter<string>();

getClicked(){
  this.clicked.emit('clicked');
}
}