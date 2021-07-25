import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.css']
})
export class SpriteComponent {

  

  title = 'sprite';


  
@Input("backgroundUrl")
public backgroundUrl:any;

getAll(){
  let backgroundUrlView=`url(${this.backgroundUrl}) ${this.backgroundPosition}`;
  return backgroundUrlView ;
}

@Input("backgroundPosition")
public backgroundPosition:any;

// getPos(){
//   return this.backgroundPosition;
// }

@Input("widthW")
public widthW:any;

getWidth(){
  return this.widthW;
}

@Input("heightH")
public heightH:any;

getHeight(){
  return this.heightH;
}

@Output("clicked-clicked")
public clicked:EventEmitter<string>=new EventEmitter<string>();

getClicked(){
  this.clicked.emit('clicked');
}

 
}
