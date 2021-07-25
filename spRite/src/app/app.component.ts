import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./sprite.component.css']
})
export class AppComponent {
  title = 'app';


  
  private photoSprite:string="http://fe.it-academy.by/Examples/cards2.png";

  private widthWhole:number=574;

  private heightWhole:number=2712;
 
  private width:number=138;

  private height:number=193;

  private offsetX:number=0;

  private offsetY:number=0;

  getPhoto():string {
    return this.photoSprite;
  };


  getWidth():string {
    let meanWidth=`${this.width}px`;
    return meanWidth;
  };

  getHeight():string{
    let meanHeight=`${this.height}px`;
    return meanHeight;
  }

  getOffset():void{
    if(this.width+this.offsetX<this.widthWhole){
      this.offsetX=this.offsetX+this.width+5;
    }
    else{
      this.offsetX=0;
      if(this.height+this.offsetY<this.heightWhole){
        this.offsetY=this.offsetY+this.height;
      }
      else{
        this.offsetY=0;
      }
    }
 
    // if(this.height+this.offsetY<this.heightWhole){
    //   this.offsetY=this.offsetY+this.height+5;
    // }
    
   this.getThem();

  };

  getThem():string{
    let height=`${this.offsetY}px`;

    let width=`${this.offsetX}px`;
    let row=width+' '+height;
    return row;

  }

// @Output("clicked")
// public clicked:EventEmitter<string>=new EventEmitter<string>();

// getClicked(){
//   this.clicked.emit('clicked');
// }
}
