var SHOP = React.createClass({

    displayName: "SHOP",

    propTypes: {
        allItems: React.PropTypes.array.isRequired,
        shopName: React.PropTypes.string.isRequired,
      },

    getInitialState: function () {
        return {
          selectedItemId:0,
          items: this.props.allItems,
        };
      },



    selectedRow: function(num){
         code=num.code;
         this.set.state({selectedItemId:code});
         var elem=document.getElementById(this.state.selectedItemId);
         elem.setAttribute("style", 'background:orange;');
    },

    deleteItem: function(id){ 
       let filteredItems=this.state.items.filter(i=> i.id!=id)
       
        this.set.state({items:filteredItems});
       },


  

    render: function () {


      return React.DOM.div( {className:'SHOP'}, 
      React.DOM.h1( {className:'SHOPNAME'}, this.props.shopName ),
      React.DOM.div( {className:'ISHOP'},  React.DOM.table( {className:'ALLITEMS'}, React.DOM.tbody({className:'tb'},
       this.state.items.forEach((elem,ind,) => React.createElement( ISHOP, {v:elem, i:ind, className:'item', cbSelected:this.selectedRow, allItems:this.props.allItems, cbDelete:this.deleteItem,}, elem) )))));
      
    },
  
  }

)