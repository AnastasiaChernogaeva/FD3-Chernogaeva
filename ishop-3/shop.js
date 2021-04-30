import React from 'react';
import PropTypes from 'prop-types';



import Ishop from './ishop3';
import IshopCard from './ishopcard.js';

class Shop extends React.Component {


    static propTypes = {
        allItems: PropTypes.array.isRequired,
        shopName: PropTypes.string.isRequired,
      };

    state = {
          selectedItemId:0,
          items: this.props.allItems,
          deletedItemId:0,
          chosen:false,
      };



    selectedRow=(code)=>{


        
      if(this.state.selectedItemId!=code){
        this.setState({ chosen:false,},this.highTimeToAct(code));  
      }
      else if(this.state.selectedItemId==code){
        this.setState({selectedItemId:0, chosen:false,},this.answer);
      }
      else{
        this.highTimeToAct();
      }
   


    };

    highTimeToAct=(code)=>{
      this.setState({selectedItemId:code, chosen:true,},this.answer);
      };

    answer=()=>{
      console.log("Ready!!!");
    };




    deleteItem=(id)=>{ 
       let filteredItems=this.state.items.filter(i=> i!=id)
       this.setState({items:filteredItems, deletedItemId:id,});
       };


  

    render() {
      var innerItems=this.state.items.map((elem,ind,) => 
      <Ishop
       v={elem} i={ind} key={ind} className='item' 
       cbDelete={this.deleteItem} cbSelected={this.selectedRow}
        chosenRow={this.state.chosen} selectedItem={this.state.selectedItemId}>
          elem
      </Ishop>  
      );

      var card=this.state.items.map((elem,ind,) => <IshopCard 
        v={elem} i={ind} key={ind} className='Itemscard'  selectedItem={this.state.selectedItemId}>
      </IshopCard>);

      return(
      <div className='SHOP'>

       <h1 className='SHOPNAME'>{this.props.shopName}</h1> 
       
       <div className='ISHOP'>
         <table className='ALLITEMS'>
           <tbody className='tb'>
           {innerItems}
           </tbody>
         </table>       
       </div> 

        {this.state.selectedItemId}?:null

      </div> 
      
       ) 
    };
  
  }

  export default Shop;

