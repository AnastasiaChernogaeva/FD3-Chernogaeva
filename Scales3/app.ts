
class Scales <StorageEngine extends IStorageEngine>{
  

    storageEngine:StorageEngine=null;

    getSumScale():number {
    
        let sumScale:number=0;
        for(let i=0; i<this.storageEngine.getCount();i++){
            sumScale+=this.storageEngine.getItem(i).getScale();
            
        }
        return sumScale;
    }

    getNameList():Array<string>{
        let nameList:any[]=[];
        for(let i=0; i<this.storageEngine.getCount();i++ ){
            nameList.push(this.storageEngine[i].getName());
        }
        return nameList;
    }

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
        }
        else{
            let a=[];
            a.push(_newProduct);
         }

        
    };

    getItem(i:number):Product {
        let a:any[]=JSON.parse(localStorage.products);
      //let item=this.products[index];
        return new Product(a[i].name, a[i].scale);
    }

    getCount():number{
        let counts=this.products.length;
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
 
 
 
 
 
 
 
 
 let Scales1=new Scales<StorageEngineArray>();

 Scales1.addItem(Product1);
 Scales1.addItem(Product2);
 Scales1.addItem(Product3);
 Scales1.addItem(Product4);
 Scales1.getNameList();
 Scales1.getItem(3);
 





 let Scales2=new Scales<StorageEngineLocalStorage>();
 Scales1.addItem(Product1);
 Scales1.addItem(Product2);
 Scales1.addItem(Product3);
 Scales1.addItem(Product4);
 Scales1.getNameList();
 Scales1.getItem(2);