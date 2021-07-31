import { stringify } from '@angular/compiler/src/util';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'hall',
  templateUrl: './hall.component.html',
})
export class HallComponent {
  title = 'Cinema';


  @Input("freePlaces")
  public freePlaces:any;

  @Input("allPlaces")
  public allPlaces:any;

  @Input("occupiedPlaces")
  public occupiedPlaces:any;

  @Input("placeNumbers")
  public placeNumbers:any;

  @Input("arrOccupation")
  public occupied:any;

  getType():string{
    let str='Free';
    return str;
  }
  
  // getStyle():any{
  //   let currentCl;
  //   for(let i=0;i<this.placeNumbers.length;i++){
  //     let place=this.placeNumbers[i];
  //     if(this.occupied[place.pl-1]==false){
  //       currentCl={Places:true, Booked:false,}
  //     }
  //     else{
  //       currentCl={Places:true,Booked:true,}
  
  //     }

  //     return currentCl;
  //   }

  //   }
  }

 

