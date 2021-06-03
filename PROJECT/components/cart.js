import React from 'react';
import PropTypes from 'prop-types';

/*import './mobileClients.css';*/

import CartGood from './cartgood';

import {pageEvents} from './events';

class CartPage extends React.PureComponent {

  static propTypes = {
    cart:PropTypes.array,
  };

  state = {
    cart:this.props.cart,
  };

/*  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient info="+this.props.info+" componentWillReceiveProps");
    if(this.state.info!=newProps.info){
      this.setState({info:newProps.info});
    }
    
  };*/

  sendNewOrder=()=>{
    pageEvents.emit('Order',);
  }

  render() {

      let goodsInCart=this.state.cart.map(elem=>{
        <CartGood info={elem}/>
      });
    
    return (
     <div>
         <h2>Товары в корзине:</h2>
         <table className="CartGood"><tbody>{goodsInCart}</tbody></table>
         <input type="button" onClick="this.sendNewOrder" value="Заказать" />
     </div>
    );

  }

}

export default CartPage;
