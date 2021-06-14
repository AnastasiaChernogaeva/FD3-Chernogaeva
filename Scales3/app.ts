
class Scales <StorageEngine extends IStorageEngine>{
    storageEngine:StorageEngine;
    constructor(_storageEngine:StorageEngine){
        this.storageEngine=_storageEngine;
    };


    getSumScale():number {
    
        let sumScale:number=0;
        for(let i:number=0; i<this.storageEngine.getCount();i++){
            sumScale+=this.storageEngine.getItem(i).getScale();
            
        }
        return sumScale;
    }

    getNameList():Array<string>{
        let nameList:Array<string>=[];
        for(let i:number=0; i<this.storageEngine.getCount();i++ ){
            nameList.push(this.storageEngine.getItem(i).getName());
        }
        return nameList;
    }


    addItem(_newProduct:Product):void {
        this.storageEngine.addItem(_newProduct);
      
    };


    
}


  /*  
function uniFactory<objtype>(classRef: { new (): objtype; }): objtype {

        return new classRef();
     
     }*/

interface IStorageEngine {
  
        addItem(item:Product):void;  
        getItem(index:number):Product ;
        getCount():number;
}








class StorageEngineArray {
    products:Product[]=[];
    addItem(_newProduct:Product):void {
        this.products.push(_newProduct);
    };

    getItem(index:number):Product {
      let item=this.products[index];
        return item;
    }

    getCount():number{
        let counts=this.products.length;
        return counts;
    };
}


class StorageEngineLocalStorage {
    LocalStoragekey:string="products";
    products:Product[]=[];
    addItem(_newProduct:Product):void {
        if( localStorage.products!=undefined){
            let a:any[]=JSON.parse(localStorage.products);
            a.push(_newProduct);
            localStorage.products=JSON.stringify(a);
            // localStorage.setItem(this.LocalStoragekey, localStorage.products);    
        }
        else{
            let a=[];
            a.push(_newProduct);
            localStorage.products=JSON.stringify(a);
        //   localStorage.setItem(this.LocalStoragekey, localStorage.products);   
         }

        
    };

    getItem(i:number):Product {
        if( localStorage.products!=undefined){
        let a:any[]=JSON.parse(localStorage.products);
      //let item=this.products[index];
        return new Product(a[i].name, a[i].scale);
        }
        else{
            let text="Не существует такого элемента";
            console.log(text);
        }
    }

    getCount():number{
        let counts=localStorage.products.length;
        return counts;
    };
}




class Product {

    private scale:number;
    private name:string;
 
     constructor( _scale:number,_name:string,) {
         this.name=_name;
         this.scale=_scale;
 
 
     }
 
     getScale():number {
         console.log(` ${this.name}: вес-${this.scale} грамм `);
     return  this.scale;
     }
 
      getName():string {
         console.log(` Название продукта ${this.name} `);
         return  this.name;
     }
     
 }
 
 
 let Product1:Product=new Product(1000,"молоко");
 Product1.getName();
 Product1.getScale();
 
 let Product2:Product=new Product(1000,"кефир");
 Product2.getName();
 Product2.getScale();
 
 let Product3:Product=new Product(100,"сыр");
 Product3.getName();
 Product3.getScale();
 
 let Product4:Product=new Product(300,"хлеб");
 Product4.getName();
 Product4.getScale();
 
 
 
let StorageEngineLocalStorage1=new StorageEngineLocalStorage;
let StorageEngineArray1=new StorageEngineArray;


 
//  let Scales1=new Scales(StorageEngineArray1);
//   Scales1.constructor(StorageEngineArray1);
let Scales1=new Scales<StorageEngineArray>(StorageEngineArray1);

 Scales1.addItem(Product1);
 Scales1.addItem(Product2);
 Scales1.addItem(Product3);
 Scales1.addItem(Product4);
 Scales1.getNameList();

 





//  let Scales2=new Scales(StorageEngineLocalStorage1);
let Scales2=new Scales<StorageEngineLocalStorage>(StorageEngineLocalStorage1);
//  Scales2.constructor(StorageEngineLocalStorage1);
 Scales2.addItem(Product1);
 Scales2.addItem(Product2);
 Scales2.addItem(Product3);
 Scales2.addItem(Product4);
 Scales2.getNameList();
