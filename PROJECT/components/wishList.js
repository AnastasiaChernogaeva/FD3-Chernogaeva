import React from 'react';
import PropTypes from 'prop-types';

/*import './mobileClients.css';*/

import WishGood from './wishgood';

import {pageEvents} from './events';

class WishListPage extends React.PureComponent {

  static propTypes = {
    wish:PropTypes.array,
  };

  state = {
    wish:this.props.cart,
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

      let goodsInWisht=this.state.wish.map(elem=>{
        <WishGood info={elem}/>
      });
    
    return (
     <div>
         <h2>Товары в корзине:</h2>
         <table className="CartGood"><tbody>{goodsInWisht}</tbody></table>
         <input type="button" onClick={this.sendNewOrder} value="Заказать" />
     </div>
    );

  }

}

export default WishListPage;
