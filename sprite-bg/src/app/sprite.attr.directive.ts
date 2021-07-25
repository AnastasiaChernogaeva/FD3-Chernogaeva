import { Directive, ElementRef } from "@angular/core"; 

@Directive({ 
  selector: "[spritebg]", 
}) 
export class SpriteBG { 

    url:string='url(http://fe.it-academy.by/Examples/smileys.png)';
    width:number=26;
    height:number=25;
    offsetX:number=0;
    offsetY:number=0;
    widthWhole:number=124;
    heightWhole:number=100;



  constructor(private element: ElementRef) {

    this.setBG();

    setInterval( ()=>{ 
      this.setBG() 
    },2000);

  } 


  setBG():void {

    if(this.width+this.offsetX<this.widthWhole){
        this.offsetX=this.offsetX+this.width+5;
      }
      else{
        this.offsetX=0;
        if(this.height+this.offsetY<this.heightWhole){
          this.offsetY=this.offsetY+this.height;
        }
        else{
          this.offsetY=0;
        }
    }
    let offsets:string=`${this.offsetX}px ${this.offsetY}px`
    // element:ElementRef - это Ангуляр-обёртка для HTML-тега
    // element.nativeElement - это обычный DOM-элемент
    this.element.nativeElement
      .style.background=`${this.url} ${offsets}`;
      this.element.nativeElement
      .style.width=`${this.width}px`;
      this.element.nativeElement
      .style.height=`${this.height}px`;
  }

}