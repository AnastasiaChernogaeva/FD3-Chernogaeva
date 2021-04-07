


var ISHOP = React.createClass({

    displayName: "ISHOP",
  
    render: function () {

      var itemsCode=[];

      this.props.allItems.forEach(function(v,i,a){
          var textAmount='Количество товаров на складе: ';
          var textCost='Цена: ';
          var itemCode=
          React.DOM.tr({ className:'tableRow'}, 
          React.DOM.td({className:'itemPhoto'}, React.DOM.img({src:v.itemPhotoURL}) ),
          React.DOM.td({className:'itemInfo'}, React.DOM.h3({className:'nameItem',}, v.itemName), React.DOM.p({className:'amount',}, textAmount,v.itemAmount),React.DOM.p({className:'cost'},textCost,v.itemCost) )
          );

          itemsCode.push(itemCode);
      })
      return React.DOM.div( {className:'ISHOP'}, 
      React.DOM.h1( {className:'SHOPNAME'}, this.props.shopName ),
      React.DOM.table( {className:'ALLITEMS'},React.DOM.tbody({className:'tb'}, itemsCode) ),
      );
    },
  
  })