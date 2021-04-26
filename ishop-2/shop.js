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
          deletedItemId:0,
          chosen:false,
        };
      },



    selectedRow: function(code){
        
      if(this.state.selectedItemId!=code){
        this.setState({ chosen:false,},highTimeToAct);  
      }
      else if(this.state.selectedItemId==code){
        this.setState({selectedItemId:0, chosen:false,},answer);
      }
      else{
        highTimeToAct();
      }

     
      function highTimeToAct(){
        this.setState({selectedItemId:code, chosen:true,},answer);
        };

      function answer(){
        console.log("Ready!!!");
      }
      
    },

    deleteItem: function(id){ 
       let filteredItems=this.state.items.filter(i=> i!=id)
       this.setState({items:filteredItems, deletedItemId:id,});
       },


  

    render: function () {

      return React.DOM.div( {className:'SHOP'}, 
      React.DOM.h1( {className:'SHOPNAME'}, this.props.shopName ),
      React.DOM.div( {className:'ISHOP'},  React.DOM.table( {className:'ALLITEMS'}, React.DOM.tbody({className:'tb'},
       this.state.items.map((elem,ind,) => React.createElement( ISHOP, {v:elem, i:ind, key:ind, className:'item',   cbDelete:this.deleteItem, cbSelected:this.selectedRow, chosenRow:this.state.chosen, selectedItem:this.state.selectedItemId, }, elem) )))));
      
    },
  
  }

)