

    var itemsArr= [
      {code:1, itemName:'Набор для творчества стринг арт "Панда"', itemCost:'10руб', itemPhotoURL:'https://static.my-shop.ru/imo/transform/profile=slider/product/3/421/4207639.jpg', itemAmount:'8',},
      {code:2, itemName:'Набор для детского творчества "Шоколадная ручка", новая версия', itemCost:'5 руб', itemPhotoURL:'https://static.my-shop.ru/imo/transform/profile=slider/product/3/434/4335142.jpg', itemAmount:'15',},
      {code:3, itemName:'Набор для творчества "Квиллинг". ', itemCost:'4руб', itemPhotoURL:'https://static.my-shop.ru/imo/transform/profile=slider/product/3/404/4031310.jpg', itemAmount:'30',},
      {code:4, itemName:'Картина из пайеток "Сверкающая бабочка"', itemCost:'7руб', itemPhotoURL:'https://static.my-shop.ru/imo/transform/profile=slider/product/2/190/1899041.jpg', itemAmount:'15',},
      {code:5, itemName:'Французские опыты "Науки с Буки".', itemCost:'6руб', itemPhotoURL:'https://static.my-shop.ru/imo/transform/profile=slider/product/3/169/1687737.jpg', itemAmount:'20',},
      {code:6, itemName:'Игра-викторина Bondibon "Умная Сова.', itemCost:'8руб', itemPhotoURL:'https://static.my-shop.ru/imo/transform/profile=slider/product/3/426/4254952.jpg', itemAmount:'9',},
      {code:7, itemName:'Настольная игра "Кто я?"', itemCost:'3руб', itemPhotoURL:'https://static.my-shop.ru/imo/transform/profile=slider/product/3/286/2852395.jpg', itemAmount:'5',},
      {code:8, itemName:'Глобус-бар', itemCost:'35руб', itemPhotoURL:'https://static.my-shop.ru/imo/transform/profile=slider/product/3/445/4449325.jpg', itemAmount:'2',},
      {code:9, itemName:'Салфетница', itemCost:'20руб', itemPhotoURL:'https://static.my-shop.ru/imo/transform/profile=slider/product/3/442/4416743.jpg', itemAmount:'40',},
      {code:10, itemName:'Подставка для бутылки', itemCost:'100руб', itemPhotoURL:'https://static.my-shop.ru/imo/transform/profile=slider/product/3/442/4416682.jpg', itemAmount:'31',},
      {code:11, itemName:'Ваза для фруктов 2-х ярусная', itemCost:'85руб', itemPhotoURL:'https://static.my-shop.ru/imo/transform/profile=slider/product/3/442/4416639.jpg', itemAmount:'12',},
      {code:12, itemName:'Ваза для фруктов', itemCost:'48руб', itemPhotoURL:'https://static.my-shop.ru/imo/transform/profile=slider/product/3/442/4416636.jpg', itemAmount:'96',},
      {code:13, itemName:'Инструмент для гофрирования', itemCost:'4руб', itemPhotoURL:'https://static.my-shop.ru/imo/transform/profile=slider/product/3/205/2041219.jpg', itemAmount:'22',},
      {code:14, itemName:'Папка с ручкой для рисунков "Художники"', itemCost:'7руб', itemPhotoURL:'https://static.my-shop.ru/imo/transform/profile=slider/product/3/379/3780053.jpg', itemAmount:'7',},
      {code:15, itemName:'Папка с ручкой для рисунков "Нотр-Дам"', itemCost:'15руб', itemPhotoURL:'https://static.my-shop.ru/imo/transform/profile=slider/product/3/379/3780052.jpg', itemAmount:'3',},


    ];

var ISHOP = React.createClass({

    displayName: "ISHOP",
  
    render: function () {

      var itemsCode=[];

      this.props.allItems.forEach(function(v,i,a){
          var textAmount='Количество товаров на складе';
          var textCost='Цена';
          var itemCode=
          React.DOM.tr({key:v.code, className:'tableRow'}, 
          React.DOM.td({className:'itemPhoto'}, v.itemPhotoURL),
          React.DOM.td({className:'itemInfo'}, React.DOM.h3(v.itemName), React.DOM.p(textAmount,v.itemAmount),React.DOM.p({className:'cost'},textAmount,v.itemCost) )
          );

          itemsCode.push(itemCode);
      })
      return React.DOM.div( {className:'ISHOP'}, 
      React.DOM.div( {className:'SHOPNAME'}, this.props.shopName ),
      React.DOM.table( {className:'ALLITEMS'}, itemsCode ),
      );
    },
  
  })