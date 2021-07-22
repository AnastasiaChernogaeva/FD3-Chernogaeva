
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  num:number=0;

  getNum():number{
    return this.num;
  }

  getClicked(mean:string):void{
    if(mean==='-'){
      let newNum=this.num-1;
      this.num=newNum;
    }
    else if(mean==='+'){
      let newNum=this.num+1;
      this.num=newNum;
    }
  }
// @Output("clicked")
// public clicked:EventEmitter<string>=new EventEmitter<string>();

// getClicked(){
//   this.clicked.emit('clicked');
// }
}