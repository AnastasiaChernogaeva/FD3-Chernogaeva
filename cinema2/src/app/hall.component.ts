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




 
}
