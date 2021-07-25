import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cash',
  templateUrl: './cash.component.html',
})
export class CashComponent {
  title = 'Cinema';


  @Output("order-ticket")
  public orderTicket:EventEmitter<number>=new EventEmitter<number>();

  getTicket(){
    this.orderTicket.emit( );
  }

  
}