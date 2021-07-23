import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.css']
})
export class SpriteComponent {

  

  title = 'sprite';


  
@Input("backgroundUrl")
private backgroundUrl:any;

getUrl(){
  return this.backgroundUrl;
}

@Input("backgroundPosition")
private backgroundPosition:any;

getPos(){
  return this.backgroundPosition;
}

@Input("widthW")
private widthW:any;

getWidth(){
  return this.widthW;
}

@Input("heightH")
private heightH:any;

getHeight(){
  return this.heightH;
}

@Output("clicked")
public clicked:EventEmitter<string>=new EventEmitter<string>();

getClicked(){
  this.clicked.emit('clicked');
}

 
}
