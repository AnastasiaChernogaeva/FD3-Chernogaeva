import React from 'react';
import PropTypes from 'prop-types';

/*import './mobileClients.css';*/

import {pageEvents} from './events';

class CartGood extends React.PureComponent {

  static propTypes = {
    info:PropTypes.array,
  };

  state = {
    cartgood:this.props.info,
  };

/*  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient info="+this.props.info+" componentWillReceiveProps");
    if(this.state.info!=newProps.info){
      this.setState({info:newProps.info});
    }
    
  };*/

  deletefromCart=()=>{
    pageEvents.emit('DeletefromCart', this.state.cartgood.code);
  };


  render() {

    
    return (
     <tr className="cartgood">
         <td className="goodImg">
             <img src={this.state.cartgood.itemPhotoURL} alt={this.state.cartgood.itemName}/>
         </td>
         <td className="Cost">
            <p>{this.state.cartgood.itemCost}</p> 
            <p> Осталось: {this.state.cartgood.itemCost}</p> 
         </td>
         <td>
             <input type="button" onClick="this.deletefromCart" value="Удалить" />
         </td>
     </tr>
    );

  }

}

export default CartGood;
