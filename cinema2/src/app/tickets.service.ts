import { Injectable } from "@angular/core";
import {Observable} from 'rxjs';

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
        // {success:false,errno:NO_MORE_SEATS}
        let text="Все места заняты!";
        return text;
      }
      else{
        // {success:false,errno:OUT_OF_SEATS}
          let text="К сожалению, мест не хватает! Введите меньшее число билетов!";
          return text;
      }
  }

  getTicketsInfo(arr:any, bookedTickets:any): Observable<Array<boolean>>{
     for (let i=0; i<bookedTickets.length; i++){
       if (bookedTickets[i]==i+1)
          arr[i]=true;
      else {
        arr[bookedTickets[i]-1]=true;
      }
     }
    return arr;
  }

}
