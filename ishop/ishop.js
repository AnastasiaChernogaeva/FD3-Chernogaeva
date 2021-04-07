


var ISHOP = React.createClass({

    displayName: "ISHOP",
  
    render: function () {

      var itemsCode=[];

      this.props.allItems.forEach(function(v,i,a){
          var textAmount='Количество товаров на складе';
          var textCost='Цена';
          var itemCode=
          React.DOM.tr({key:v.code, className:'tableRow'}, 
          React.DOM.td({className:'itemPhoto'}, React.DOM.img({src:v.itemPhotoURL}) ),
          React.DOM.td({className:'itemInfo'}, React.DOM.h3(v.itemName), React.DOM.p(textAmount,v.itemAmount),React.DOM.p({className:'cost'},textAmount,v.itemCost) )
          );

          itemsCode.push(itemCode);
      })
      return React.DOM.div( {className:'ISHOP'}, 
      React.DOM.div( {className:'SHOPNAME'}, this.props.shopName ),
      React.DOM.table( {className:'ALLITEMS'},React.DOM.tbody(itemsCode) ),
      );
    },
  
  })