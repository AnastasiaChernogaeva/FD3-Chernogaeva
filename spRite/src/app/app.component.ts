import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  // styleUrls: ['./sprite.component.css']
})
export class AppComponent {
  title = 'app';


  
  private photoSprite:string="  http://fe.it-academy.by/Examples/cards2.png  ";

  private widthWhole:number=574;

  private heightWhole:number=2712;
 
  private width:number=138;

  private height:number=186;

  private offsetX:number=2;

  private offsetY:number=2;

  getPhoto():string {
    return this.photoSprite;
  };


  getWidth():string {
    let meanWidth=`${this.width}+px`;
    return meanWidth;
  };

  getHeight():string{
    let meanHeight=`${this.height}+px`;
    return meanHeight;
  }

  getOffset():string{
    if(this.width+this.offsetX<this.widthWhole){
      this.offsetX+=this.width;
    }
    let width=`${this.offsetX}+px`;
    if(this.height+this.offsetY<this.heightWhole){
      this.offsetY+=this.height;
    }
    let height=`${this.offsetY}+px`;

    let row=width+height;
    return row;

  };

// @Output("clicked")
// public clicked:EventEmitter<string>=new EventEmitter<string>();

// getClicked(){
//   this.clicked.emit('clicked');
// }
}
