var Scales = /** @class */ (function () {
    function Scales() {
        this.storageEngine = null;
    }
    Scales.prototype.getSumScale = function () {
        var sumScale = 0;
        for (var i = 0; i < this.storageEngine.getCount(); i++) {
            sumScale += this.storageEngine.getItem(i).getScale();
        }
        return sumScale;
    };
    Scales.prototype.getNameList = function () {
        var nameList = [];
        for (var i = 0; i < this.storageEngine.getCount(); i++) {
            nameList.push(this.storageEngine.getItem(i).getName());
        }
        return nameList;
    };
    Scales.prototype.addItem = function (_newProduct) {
        this.storageEngine.addItem(_newProduct);
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
        this.products = [];
    }
    StorageEngineLocalStorage.prototype.addItem = function (_newProduct) {
        if (localStorage.products != undefined) {
            var a = JSON.parse(localStorage.products);
            a.push(_newProduct);
            localStorage.products = JSON.stringify(a);
        }
        else {
            var a = [];
            a.push(_newProduct);
        }
    };
    ;
    StorageEngineLocalStorage.prototype.getItem = function (i) {
        var a = JSON.parse(localStorage.products);
        //let item=this.products[index];
        return new Product(a[i].name, a[i].scale);
    };
    StorageEngineLocalStorage.prototype.getCount = function () {
        var counts = this.products.length;
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
var Product1 = new Product(1000, "молоко");
Product1.getName();
Product1.getScale();
var Product2 = new Product(1000, "кефир");
Product2.getName();
Product2.getScale();
var Product3 = new Product(100, "сыр");
Product3.getName();
Product3.getScale();
var Product4 = new Product(300, "хлеб");
Product4.getName();
Product4.getScale();
var Scales1 = new Scales();
Scales1.addItem(Product1);
Scales1.addItem(Product2);
Scales1.addItem(Product3);
Scales1.addItem(Product4);
Scales1.getNameList();
var Scales2 = new Scales();
Scales1.addItem(Product1);
Scales1.addItem(Product2);
Scales1.addItem(Product3);
Scales1.addItem(Product4);
Scales1.getNameList();
//# sourceMappingURL=app.js.map