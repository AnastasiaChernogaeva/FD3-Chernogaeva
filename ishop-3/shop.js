import React from 'react';
import PropTypes from 'prop-types';

import './shop.css';

import ISHOP from './ishop3';

class SHOP extends React.Component {


    static propTypes = {
        allItems: React.PropTypes.array.isRequired,
        shopName: React.PropTypes.string.isRequired,
      };

    state = {
          selectedItemId:0,
          items: this.props.allItems,
          deletedItemId:0,
          chosen:false,
      };



    selectedRow=(code)=>{
        
      if(this.state.selectedItemId!=code){
        this.setState({ chosen:false,},highTimeToAct);  
      }
      else if(this.state.selectedItemId==code){
        this.setState({selectedItemId:0, chosen:false,},answer);
      }
      else{
        highTimeToAct();
      }
    };

         
    highTimeToAct=()=>{
      this.setState({selectedItemId:code, chosen:true,},answer);
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
      <ISHOP
       v={elem} i={ind} key={ind} className='item' 
       cbDelete={this.deleteItem} cbSelected={this.selectedRow}
        chosenRow={this.state.chosen} selectedItem={this.state.selectedItemId}>
          elem
      </ISHOP>  
      );

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

      </div> 
      
       ) 
    };
  
  }

  export default SHOP;

