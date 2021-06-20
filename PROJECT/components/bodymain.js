import React from 'react';
import PropTypes from 'prop-types';

/*import './mobileClients.css';*/

import BodyShop from './bodyshop.js';
import CartPage from './cart.js';
import WishListPage from './wishList.js';
import Registration from './registration.js';
import Login from './login.js';

import {pageEvents} from './events';

class MainBody extends React.PureComponent {

  static propTypes = {
    goods:PropTypes.array,
    categories:PropTypes.array,
    bodyChange:PropTypes.number,
    cart:PropTypes.array,
    wishList:PropTypes.array,
    toShowSentOrder:PropTypes.number,
  };

/*  state = {
    goods:this.props.goods,
  };

  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient info="+this.props.info+" componentWillReceiveProps");
    if(this.state.info!=newProps.info){
      this.setState({info:newProps.info});
    }
    
  };*/

  render() {
    let shop=<BodyShop goods={this.props.goods} categories={this.props.categories}/>
    let cartPage=<CartPage cart={this.props.cart} />
    let wishListPage=<WishListPage wish={this.props.wishList} />
    let registration=<Registration/>
    let login=<Login/>
    let infoAboutOrder=<div className="Oder"><p>Ваш заказ оформлен!</p><p>В ближайшее время с Вами свяжется оператор.</p></div>


    return (
     <div>
         {this.props.bodyChange===1&&shop}
         {this.props.bodyChange===2&&cartPage}
         {this.props.bodyChange===3&&wishListPage}
         {this.props.bodyChange===4&&registration}
         {this.props.bodyChange===5&&login}
         {this.props.bodyChange===6&&infoAboutOrder}
     </div>
    );

  }

}

export default MainBody;
