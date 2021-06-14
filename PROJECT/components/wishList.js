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

  changeBody1=()=>{
    pageEvents.emit('ChangeBody',1);

  }
  
  render() {

if(this.state.wish!=null){
      let goodsInWisht=this.state.wish.slice();
      goodsInWisht=goodsInWisht.map(elem=>{
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
    else{
      return (
        <div>
            <h2>У вас нет товаров в WishList</h2>
            <input type="button" onClick={this.changeBody1} value="Перейти на главную" />
        </div>
       );
    }
  }

}

export default WishListPage;
