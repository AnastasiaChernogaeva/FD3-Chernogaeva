import React from 'react';
import PropTypes from 'prop-types';

import './good.css';

import {pageEvents} from './events';

class Good extends React.PureComponent {

  static propTypes = {
    info:PropTypes.object,
  };

  state = {
    good:this.props.info,
  };

/*  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient info="+this.props.info+" componentWillReceiveProps");
    if(this.state.info!=newProps.info){
      this.setState({info:newProps.info});
    }
    
  };*/

  addToCart=()=>{
    pageEvents.emit('AddToCart', this.state.good.code);
  };

  addToWishList=()=>{
    pageEvents.emit('AddToWishList',this.state.good.code);
  };

  render() {

    
    return (
     <div className="good">
         <div className="goodImg" >
             <img src={this.state.good.itemPhotoURL} alt={this.state.good.itemName}/>
         </div>
         <div className="Cost">
            <p>{this.state.good.itemName}</p> 
            <p>{this.state.good.itemCost}</p> 
            <p> Осталось: {this.state.good.itemAmount}</p> 
         </div>
         <div className="Buttons Top_Buttons">
           <button  onClick={this.addToWishList}><span className="material-icons">add_shopping_cart</span></button>
           <button onClick={this.addToCart}><span className="material-icons">favorite_border</span></button> 
       </div>
       </div>
      );
              // <input type="button" onClick={this.addToWishList} value="WishList" />
            //  <input type="button" onClick={this.addToCart} value="Корзина" /> 
   

  }

}

export default Good;
