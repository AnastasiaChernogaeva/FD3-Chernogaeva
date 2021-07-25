import { Component } from '@angular/core';

import { TicketsService } from './tickets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cinema';

  private allPlaces:number=10;
  private freePlaces:number=10;
  private occupiedPlaces:number=0;
  private ticketChanges;
  public textT:string="";

  private theAmountOfTheTickets:number=0;

  constructor(_Ticket:TicketsService) {
    this.ticketChanges=_Ticket;
  }

  
  amountWeNeed(ev:any){
    this.theAmountOfTheTickets=ev.value;
  }

  changesTickets(){
    let resultArr=this.ticketChanges.orderTickets( this.theAmountOfTheTickets ,this.occupiedPlaces, this.freePlaces);

    if(typeof resultArr!="string"){
      this.occupiedPlaces=resultArr[0];
      this.freePlaces=resultArr[1];
      this.textT="";
    }
    else{
        this.textT=resultArr;
    }
  }

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
