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



    selectedRow: function(code){
        
        
        if (this.state.selectedItemId===code){
          var elem=document.getElementById(this.state.selectedItemId);
          elem.style.cssText= 'background:transparent;';
        }
        else{
        this.setState({selectedItemId:code},highTimeToAct);

        function highTimeToAct(){
        var elem=document.getElementById(this.state.selectedItemId);
        elem.style.cssText= 'background:lightsalmon;';
        };
      
      };
      
    },

    deleteItem: function(id){ 
       let filteredItems=this.state.items.filter(i=> i!=id)
       this.setState({items:filteredItems});
       },


  

    render: function () {

      return React.DOM.div( {className:'SHOP'}, 
      React.DOM.h1( {className:'SHOPNAME'}, this.props.shopName ),
      React.DOM.div( {className:'ISHOP'},  React.DOM.table( {className:'ALLITEMS'}, React.DOM.tbody({className:'tb'},
       this.state.items.map((elem,ind,) => React.createElement( ISHOP, {v:elem, i:ind, key:ind, className:'item',  allItems:this.props.allItems, cbDelete:this.deleteItem, cbSelected:this.selectedRow,}, elem) )))));
      
    },
  
  }

)