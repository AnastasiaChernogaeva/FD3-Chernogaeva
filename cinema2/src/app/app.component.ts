import { Component } from '@angular/core';
// import { from } from 'rxjs/observable/from';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';

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
  public placeNumbersMore:Array<{pl:number,}>=[{pl:1},{pl:2},{pl:3},{pl:4},{pl:5},{pl:6},{pl:7},{pl:8},{pl:9},{pl:10},];
  public placeNumbers:Array<number>=[1,2,3,4,5,6,7,8,9,10];
  public bookedTickets="";
  public arrResBoolean:any=[false, false, false, false, false, false, false, false, false, false, ];

  private theAmountOfTheTickets:number=0;

  constructor(_Ticket:TicketsService) {
    this.ticketChanges=_Ticket;
  }

  
  amountWeNeed(ev:any){
    this.theAmountOfTheTickets=ev.value;
  }
  getBookedTickets(){
    if(this.bookedTickets!="")
    return "Номера Ваших заказанных билетов:"+this.bookedTickets;
    else
      return "";
  }

  changesTickets(){
    this.bookedTickets="";
    let resultArr=this.ticketChanges.orderTickets(this.placeNumbers, this.theAmountOfTheTickets ,this.occupiedPlaces, this.freePlaces);
    

    if(typeof resultArr!="string"){
      this.occupiedPlaces=resultArr[0];
      this.freePlaces=resultArr[1];
      this.bookedTickets=resultArr[2];
      this.placeNumbers=resultArr[3];
      this.textT="";
      let res=this.ticketChanges.getTicketsInfo(this.arrResBoolean, this.bookedTickets);
      this.arrResBoolean=res;
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
