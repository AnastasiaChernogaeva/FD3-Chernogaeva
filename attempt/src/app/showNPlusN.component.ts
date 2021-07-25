
import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'showNPlusN',
  templateUrl: './showNPlusN.component.html',
  styleUrls: ['./showNPlusN.component.css']
})
export class showNPlusN {
  title = 'showNPlusN';

  @Input("number-changed")
  public numberChanged:any;

  @Input("background-M")
  public backgroundM:any;

  getBackgroundM(){
    let bV=`url(${this.backgroundM})`;
    return bV;
  }


//   getNumber():number{
//     return this.numberChanged+Math.random();
//   }


}