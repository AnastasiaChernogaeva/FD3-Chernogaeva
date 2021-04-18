
var ISHOP = React.createClass({

    displayName: "ISHOP",

    propTypes: {
        allItems: React.PropTypes.array.isRequired,
      },


    getInitialState: function () {
        return {
          items: itemsArr,
        };
      },
    
    
  
    funDelete: function(remember) {
    let elem=this.state.items[remember-1];
    let newArr=this.props.allItems.slice();
    let ind=newArr.indexOf(elem);
    newArr=newArr.slice(ind,1);
     this.set.state({items:newArr});
    },

    readyToDelete: function(EO){
        var choosenRow=EO.target;
        


    },

    render: function () {

      var itemsCode=[];

      this.state.items.forEach(function(v,i,a){
          var textAmount='Количество товаров на складе: ';
          var textCost='Цена: ';
          var remember=v.code;
          var itemCode=
          React.DOM.tr({ className:'tableRow', key:v.code}, 
          React.DOM.td({className:'itemPhoto', onClick:readyToDelete(),}, React.DOM.img({src:v.itemPhotoURL}) ),
          React.DOM.td({className:'itemInfo', onClick:readyToDelete(),}, React.DOM.h3({className:'nameItem',}, v.itemName), React.DOM.p({className:'amount',}, textAmount,v.itemAmount),React.DOM.p({className:'cost'},textCost,v.itemCost) ),
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