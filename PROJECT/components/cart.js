import React from 'react';
import PropTypes from 'prop-types';

/*import './mobileClients.css';*/

import CartGood from './cartgood';

import {pageEvents} from './events';

class CartPage extends React.PureComponent {

  static propTypes = {
    cart:PropTypes.array,
  };

  // state = {
  //   cart:this.props.cart,
  // };

/*  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient info="+this.props.info+" componentWillReceiveProps");
    if(this.state.info!=newProps.info){
      this.setState({info:newProps.info});
    }
    
  };*/

  componentDidMount = () => {
    pageEvents.addListener('CartElemToAnimate',this.animate);
  }

  componentWillUnmount = () => {
    pageEvents.removeListener('CartElemToAnimate',this.animate);
  }


animate=(id)=>{
  
}


  sendNewOrder=()=>{
    pageEvents.emit('Order',);
  }

  changeBody1=()=>{
    pageEvents.emit('ChangeBody',1);

  }

  render() {
     if(this.props.cart==null){
      return (
        <div className="Top_Buttons">
            <h2>У вас нет товаров в корзине</h2>
            <input type="button" className="Top_Buttons" onClick={this.changeBody1} value="Перейти на главную" />
        </div>
         );
      
    }
    else{
      let goodsInCart=this.props.cart.slice();
      goodsInCart=goodsInCart.map(elem=><CartGood info={elem} key={elem.code} num={elem.code}/>);
    
    return (
      <div className="Top_Buttons">
         <h2>Товары в корзине:</h2>
         {/* <table className="CartGood"><tbody>{goodsInCart}</tbody></table> */}
         <div className="CartGood">{goodsInCart}</div>
         <input type="button" className="Top_Buttons" onClick={this.sendNewOrder} value="Заказать" />
     </div>
    );
    }
  }

}

export default CartPage;
