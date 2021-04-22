
var ISHOP = React.createClass({

    displayName: "ISHOP",

    propTypes: {
        allItems: React.PropTypes.array.isRequired,
        cbSelected: React.PropTypes.func.isRequired,
        code:React.PropTypes.number.isRequired,
        cbDelete:React.PropTypes.func.isRequired,
    },



    getInitialState: function () {
        return {
          items: itemsArr,
        };
      },
    
  
    funDelete: function() {
     this.props.cbDelete(this.props.code)
    },

    select: function(EO){
     this.props.cbSelected(EO.target.value);   
    },

    render: function () {

      var itemsCode=[];

      this.state.items.forEach(function(v,i,a){
          var textAmount='Количество товаров на складе: ';
          var textCost='Цена: ';
          var itemCode=
          React.DOM.tr({ className:'tableRow', id:v.code, key:v.code, onClick:this.select,}, 
          React.DOM.td({className:'itemPhoto', }, React.DOM.img({src:v.itemPhotoURL}) ),
          React.DOM.td({className:'itemInfo', }, React.DOM.h3({className:'nameItem',}, v.itemName), React.DOM.p({className:'amount',}, textAmount,v.itemAmount),React.DOM.p({className:'cost'},textCost,v.itemCost) ),
          React.DOM.td({className:'del'}, React.DOM.input({type:"button", defaultValue:"delete", onClick: this.funDelete,},) )
          );

          function readyToDelete(itemCode){
              

          };

          itemsCode.push(itemCode);
      })
      return React.DOM.div( {className:'ISHOP'}, 
      React.DOM.h1( {className:'SHOPNAME'}, this.props.shopName ),
      React.DOM.table( {className:'ALLITEMS'},React.DOM.tbody({className:'tb'}, itemsCode) ),
      );
    },
  
  })