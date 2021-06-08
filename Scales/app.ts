
class Scales {

    static productsCount:number=0;
    products:Array<Product>=[];
   /* scale:number;
    name:string;

    constructor() {
        Scales.productsCount++;
     
    }*/

    add(_newProduct:Product):void {
        this.products.push(_newProduct);
    };

    getSumScale():number {
        let sumScale:number=0;
        this.products.forEach(elem=>{sumScale+=elem.scale});
        return sumScale;
    }

    getNameList ():Array<string> {
        let nameList;
        this.products.forEach(elem=>{nameList.push(elem.name)});
        return nameList;
    }
    
}


class Product {

    scale:number;
    name:string;

    constructor( _scale:number,_name:string,) {
        this.name=_name;
        this.scale=_scale;


    }

    getScale(_scale:number):number {
        console.log(` ${this.name}: вес-${_scale} грамм `);
    return  this.scale;
    }

     getName(_name:string):string {
        console.log(` Название продукта ${_name} `);
        return  this.name;
    }
    
}

class Apple extends Product {

    species:string;

    constructor( scale:number,_species:string) {
        // конструктор класса-потомка должен вызвать 
        // конструктор класса-предка
        super(scale, "apple"); 
        this.species=_species;
    }

    show():void {
        console.log(this.species);
    }
}

class Tomato extends Product {
    
 
    species:string;

    constructor(scale:number,_species:string) {
        // конструктор класса-потомка должен вызвать 
        // конструктор класса-предка
        super(scale, "tomato"); 
        this.species=_species;
    }

    show():void {
        console.log(this.species);
    }
}

let Apple1:Apple=new Apple(60,"фрукт");
Apple1.show();
Apple1.getName("Яблоко");
Apple1.getScale(60);

let Apple2:Apple=new Apple(140,"фрукт");
Apple2.show();
Apple2.getName("Яблоко");
Apple2.getScale(140);

let Apple3:Apple=new Apple(140,"фрукт");
Apple3.show();
Apple3.getName("Яблоко");
Apple3.getScale(140);

let Tomato1:Tomato=new Tomato(60,"овощь");
Tomato1.show();
Tomato1.getName("Помидор");
Tomato1.getScale(60);

let Tomato2:Tomato=new Tomato(120,"овощь");
Tomato2.show();
Tomato2.getName("Помидор");
Tomato2.getScale(120);

let Tomato3:Tomato=new Tomato(180,"овощь");
Tomato3.show();
Tomato3.getName("Помидор");
Tomato3.getScale(180);




let Scales1:Scales=new Scales();

Scales1.add(Tomato2);
Scales1.add(Tomato1);
Scales1.add(Tomato3);
Scales1.add(Apple1);
Scales1.add(Apple2);
Scales1.add(Apple3);
Scales1.getNameList();
Scales1.getSumScale();



