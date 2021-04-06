
var ISHOP = React.createClass({

    displayName: "ISHOP",

    getDefaultProps: function () {
        return {
          shopName: "NAM'S",
          allItems: itemsArr,
        };
      },
  
    render: function () {

      var itemsCode=[];

      allItems.forEach(function(v,i,a){
          var textAmount='Количество товаров на складе';
          var textCost='Цена';
          var item=this.props.allItems[i];
          var itemCode=
          React.DOM.tr({key:item.code, className:'tableRow'}, 
          React.DOM.td({className:'itemPhoto'}, item.itemPhotoURL),
          React.DOM.td({className:'itemInfo'}, React.DOM.h3(item.itemName), React.DOM.p(textAmount,item.itemAmount),React.DOM.p({className:'cost'},textAmount,item.itemCost) )
          );

          itemsCode.push(itemCode);
      })
      return React.DOM.div( {className:'ISHOP'}, 
      React.DOM.div( {className:'SHOPNAME'}, this.props.shopName ),
      React.DOM.table( {className:'ALLITEMS'}, itemsCode ),
      );
    },
  
  })