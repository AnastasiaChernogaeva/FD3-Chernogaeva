import { Component } from '@angular/core';

@Component({
  selector: 'hall',
  templateUrl: './hall.component.html',
})
export class HallComponent {
  title = 'Cinema';

  private allPlaces:number=10;
  private freePlaces:number=10;
  private occupiedPlaces:number=0;


  getFreePlaces(){
    return this.freePlaces;
  }

  getOccupiedPlaces(){
    return this.occupiedPlaces;
  }

  getAllPlaces(){
    return this.allPlaces;
  }
}
