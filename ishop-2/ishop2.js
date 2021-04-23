
var ISHOP = React.createClass({

    displayName: "ISHOP",

    propTypes: {
        allItems: React.PropTypes.array.isRequired,
        cbSelected: React.PropTypes.func.isRequired,
        code:React.PropTypes.number,
        cbDelete:React.PropTypes.func.isRequired,
        v:React.PropTypes.object,
        i:React.PropTypes.number,
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
      
          var textAmount='Количество товаров на складе: ';
          var textCost='Цена: ';
          
         return  React.DOM.tr({ className:'tableRow', id:this.props.v.code, key:this.props.v.code, onClick:this.select, }, 
          React.DOM.td({className:'itemPhoto',  }, React.DOM.img({src:this.props.v.itemPhotoURL}) ),
          React.DOM.td({className:'itemInfo',  }, React.DOM.h3({className:'nameItem',}, this.props.v.itemName), React.DOM.p({className:'amount',}, textAmount,this.props.v.itemAmount),React.DOM.p({className:'cost'},textCost,this.props.v.itemCost) ),
          React.DOM.td({className:'del', }, React.DOM.input({type:"button", defaultValue:"delete", onClick: this.funDelete,},) )
          );

         

    },
  
  })