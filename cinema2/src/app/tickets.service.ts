import { Injectable } from "@angular/core";

@Injectable()
export class TicketsService {

  orderTickets(arrPlaces:Array<number>, num:number, op:number,fp:number):any {
      if(fp-num>=0){
        let occupiedPlaces=Number(op)+Number(num);
        let freePlaces=fp-num;
        let placeNumbers=arrPlaces.splice(0,num);
        let leftPlaces=arrPlaces.slice();
        let arr=[occupiedPlaces, freePlaces, placeNumbers, leftPlaces] ;  
        return arr;
      }
      else if(fp===0){
        let text="Все места заняты!";
        return text;
      }
      else{
          let text="К сожалению, мест не хватает! Введите меньшее число билетов!";
          return text;
      }
  }

}
