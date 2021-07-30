
// import { Component, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';

//   private ph:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOcDz-LgorGnHMbZYhvPrjc1YieQHwXOA6Qw&usqp=CAU";

//   num:number=0;

//   getNum():number{
//     return this.num;
//   }

//   getClicked(mean:string):void{
//     if(mean==='-'){
//       let newNum=this.num-1;
//       this.num=newNum;
//     }
//     else if(mean==='+'){
//       let newNum=this.num+1;
//       this.num=newNum;
//     }
//   }

//   getPhoto():string{
//     return this.ph;
//   }

// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sprite-bg';
}
