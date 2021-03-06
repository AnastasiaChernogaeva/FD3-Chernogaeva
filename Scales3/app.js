var Scales = /** @class */ (function () {
    function Scales(_storageEngine) {
        this.storageEngine = _storageEngine;
    }
    ;
    Scales.prototype.getSumScale = function () {
        var sumScale = 0;
        for (var i = 0; i < this.storageEngine.getCount(); i++) {
            sumScale += this.storageEngine.getItem(i).getScale();
        }
        return sumScale;
    };
    ;
    Scales.prototype.getNameList = function () {
        var nameList = [];
        for (var i = 0; i < this.storageEngine.getCount(); i++) {
            nameList.push(this.storageEngine.getItem(i).getName());
        }
        return nameList;
    };
    ;
    Scales.prototype.addItem = function (_newProduct) {
        this.storageEngine.addItem(_newProduct);
        console.log("\u041F\u0440\u043E\u0434\u0443\u043A\u0442 " + _newProduct + " \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D");
    };
    ;
    return Scales;
}());
var StorageEngineArray = /** @class */ (function () {
    function StorageEngineArray() {
        this.products = [];
    }
    StorageEngineArray.prototype.addItem = function (_newProduct) {
        this.products.push(_newProduct);
    };
    ;
    StorageEngineArray.prototype.getItem = function (index) {
        var item = this.products[index];
        return item;
    };
    StorageEngineArray.prototype.getCount = function () {
        var counts = this.products.length;
        return counts;
    };
    ;
    return StorageEngineArray;
}());
var StorageEngineLocalStorage = /** @class */ (function () {
    function StorageEngineLocalStorage() {
        this.LocalStoragekey = "products";
    }
    StorageEngineLocalStorage.prototype.addItem = function (_newProduct) {
        if (localStorage.products != undefined) {
            var a = JSON.parse(localStorage.products);
            a.push(_newProduct);
            localStorage.products = JSON.stringify(a);
            // localStorage.setItem(this.LocalStoragekey, localStorage.products);    
        }
        else {
            var a = [];
            a.push(_newProduct);
            localStorage.products = JSON.stringify(a);
            //   localStorage.setItem(this.LocalStoragekey, localStorage.products);   
        }
    };
    ;
    StorageEngineLocalStorage.prototype.getItem = function (i) {
        if (localStorage.products != undefined) {
            // console.log(JSON.parse(localStorage.products));
            var a = JSON.parse(localStorage.products);
            //let item=this.products[index];
            return new Product(a[i].scale, a[i].name);
        }
        else {
            var text = "???? ???????????????????? ???????????? ????????????????";
            console.log(text);
        }
    };
    StorageEngineLocalStorage.prototype.getCount = function () {
        // let counts=localStorage.products.length;
        var a = JSON.parse(localStorage.products);
        var counts = a.length;
        return counts;
    };
    ;
    return StorageEngineLocalStorage;
}());
var Product = /** @class */ (function () {
    function Product(_scale, _name) {
        this.name = _name;
        this.scale = _scale;
    }
    Product.prototype.getScale = function () {
        console.log(" " + this.name + ": \u0432\u0435\u0441-" + this.scale + " \u0433\u0440\u0430\u043C\u043C ");
        return this.scale;
    };
    Product.prototype.getName = function () {
        console.log(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430 " + this.name + " ");
        return this.name;
    };
    return Product;
}());
var Product1 = new Product(1000, "????????????");
Product1.getName();
Product1.getScale();
var Product2 = new Product(1000, "??????????");
Product2.getName();
Product2.getScale();
var Product3 = new Product(100, "??????");
Product3.getName();
Product3.getScale();
var Product4 = new Product(300, "????????");
Product4.getName();
Product4.getScale();
var StorageEngineLocalStorage1 = new StorageEngineLocalStorage;
var StorageEngineArray1 = new StorageEngineArray;
//  let Scales1=new Scales(StorageEngineArray1);
//   Scales1.constructor(StorageEngineArray1);
var Scales1 = new Scales(StorageEngineArray1);
Scales1.addItem(Product1);
Scales1.addItem(Product2);
Scales1.addItem(Product3);
Scales1.addItem(Product4);
Scales1.getNameList();
//  let Scales2=new Scales(StorageEngineLocalStorage1);
var Scales2 = new Scales(StorageEngineLocalStorage1);
//  Scales2.constructor(StorageEngineLocalStorage1);
Scales2.addItem(Product1);
Scales2.addItem(Product2);
Scales2.addItem(Product3);
Scales2.addItem(Product4);
Scales2.getNameList();
Scales2.getSumScale();
//# sourceMappingURL=app.js.map