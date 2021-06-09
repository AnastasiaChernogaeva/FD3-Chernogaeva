interface IStorageEngine {
  
    addItem(item:StorageEngine):void;  
    getItem(index:number):object ;
    getCount():number;
}


class StorageEngine implements IStorageEngine{
    products:StorageEngine[];
    addItem(_newProduct:StorageEngine):void {
        this.products=[];
        this.products.push(_newProduct);
    };

    getItem(index:number):object {
        let item=this.products.find(( ind:number):object=>ind===index);
        return item;
    }

    getCount():number{
        let sumScale:number=0;
        this.products.forEach((elem:StorageEngine):void=>{sumScale+=elem.scale});
        return sumScale;
    };
}

class Scales<StorageEngine> {

  
    products:StorageEngine[];
  
/*
    addItem(_newProduct:StorageEngine):void {
        this.products=[];
        this.products.push(_newProduct);
    };

    getItem():number {
        let sumScale:number=0;
        this.products.forEach((elem:StorageEngine):void=>{sumScale+=elem.scale});
        return sumScale;
    }

    getCount():number{
    return ;
    };*/

    getNameList ():Array<string> {
        let nameList;
        this.products.forEach((elem:StorageEngine):void=>{nameList.push(elem.name)});
        return nameList;
    }
    
}


class Product {

   private scale:number;
   private name:string;

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


let Product1:Product=new Product(1000,"молоко");
Product1.getName("молоко");
Product1.getScale(1000);

let Product2:Product=new Product(1000,"кефир");
Product2.getName("кефир");
Product2.getScale(1000);

let Product3:Product=new Product(100,"сыр");
Product3.getName("сыр");
Product3.getScale(1000);

let Product4:Product=new Product(300,"хлеб");
Product4.getName("хлеб");
Product4.getScale(1000);





let Scales1=new Scales<Product>();

Scales1.addItem(Product1);
Scales1.addItem(Product2);
Scales1.addItem(Product3);
Scales1.addItem(Product4);
Scales1.getNameList();
Scales1.getItem();



