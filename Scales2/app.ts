
class Scales {

  
    products:Array<IProduct>=[];
  

    add(_newProduct:IProduct):void {
        this.products.push(_newProduct);
    };

    getSumScale():number {
        let sumScale:number=0;
        this.products.forEach((elem:IProduct):void=>{sumScale+=elem.getScale()});
        return sumScale;
    }

    getNameList ():Array<string> {
        let nameList;
        this.products.forEach((elem:IProduct):void=>{nameList.push(elem.getName())});
        return nameList;
    }
    
}



interface IProduct{
  /*  scale:number;
    name:string;*/
    getScale():number;
    getName():string ;
}

class Apple implements IProduct {

    species:string;
    scale:number;
    name:string;

    constructor( scale:number,_species:string) {
        // конструктор класса-потомка должен вызвать 
        // конструктор класса-предка
       // super(scale, "apple"); 
        this.species=_species;
        this.name="Яблоки";
        this.scale=scale;
    }
    getScale():number {
        console.log(` ${this.name}: вес-${this.scale} грамм `);
    return  this.scale;
    }

     getName():string {
        console.log(` Название продукта ${this.name} `);
        return  this.name;
    }

    show():void {
        console.log(this.species);
    }
}

class Tomato implements IProduct  {
    
 
    species:string;
    scale:number;
    name:string;

    constructor(scale:number,_species:string) {
        // конструктор класса-потомка должен вызвать 
        // конструктор класса-предка
       // super(scale, "tomato"); 
        this.species=_species;
        this.name="Помидоры";
        this.scale=scale;
    }

    getScale():number {
        console.log(` ${this.name}: вес-${this.scale} грамм `);
    return  this.scale;
    }

     getName():string {
        console.log(` Название продукта ${this.name} `);
        return  this.name;
    }

    show():void {
        console.log(this.species);
    }
}

let Apple1:Apple=new Apple(60,"фрукт");
Apple1.show();
Apple1.getName();
Apple1.getScale();

let Apple2:Apple=new Apple(140,"фрукт");
Apple2.show();
Apple2.getName();
Apple2.getScale();

let Apple3:Apple=new Apple(140,"фрукт");
Apple3.show();
Apple3.getName();
Apple3.getScale();

let Tomato1:Tomato=new Tomato(60,"овощь");
Tomato1.show();
Tomato1.getName();
Tomato1.getScale();

let Tomato2:Tomato=new Tomato(120,"овощь");
Tomato2.show();
Tomato2.getName();
Tomato2.getScale();

let Tomato3:Tomato=new Tomato(180,"овощь");
Tomato3.show();
Tomato3.getName();
Tomato3.getScale();




let Scales1:Scales=new Scales();

Scales1.add(Tomato2);
Scales1.add(Tomato1);
Scales1.add(Tomato3);
Scales1.add(Apple1);
Scales1.add(Apple2);
Scales1.add(Apple3);
Scales1.getNameList();
Scales1.getSumScale();



