import React , { Fragment }  from 'react';
import PropTypes from 'prop-types';

import './wishList.css';

import CartGood from './cartgood';

import {pageEvents} from './events';

class CartPage extends React.PureComponent {

  static propTypes = {
    cart:PropTypes.array,
  };

  state = {
    showButtons:"",
    amount:{},
  };


  componentDidMount = () => {
    pageEvents.addListener('ShouldLoginOrSignup',this.showButtons);
    pageEvents.addListener('amountToOrder',this.amountToOrder);

  }

  componentWillUnmount = () => {
    pageEvents.removeListener('ShouldLoginOrSignup',this.showButtons);
    pageEvents.removeListener('amountToOrder',this.amountToOrder);

  }



amountToOrder=(quantity, code)=>{
this.state.amount[code]=quantity;
}

showButtons=()=>{
  this.setState({showButtons:"1",},this.announce);
}


  sendNewOrder=()=>{   
    var orderTosend=[];
    let goodsToOrder=this.props.cart.slice();
    goodsToOrder=goodsToOrder.map((elem,i)=>{
      let orderProduct=goodsToOrder[i];
      if (elem.code in this.state.amount){
        orderProduct['orderAmoount']=this.state.amount[elem.code]+1;
      }
      else
      orderProduct['orderAmoount']=1;
      orderTosend.push(elem);
    })
    pageEvents.emit('Order', /*this.props.wish*/ orderTosend, "cart");
      // pageEvents.emit('Order', this.props.cart, "cart");
    
  }

  changeBody1=()=>{
    pageEvents.emit('ChangeBody',1);

  }

  change4=()=>{
    pageEvents.emit('ChangeBody',4);
  };
 
  change5=()=>{
    pageEvents.emit('ChangeBody',5);
  };

  announce=()=>{
    console.log("Something has changed");
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
      goodsInCart=goodsInCart.map(elem=><CartGood info={elem} key={elem.code}/>);
    
      
      let shButton=<Fragment>
      <p>Зарегестрируйтесь и войдите, прежде чем заказать!</p>
      <div className="Buttons Top_Buttons List">
          <input type="button" onClick={this.change4} value="Регистрация" />
          <input type="button" onClick={this.change5} value="Войти" />
     </div>
      </Fragment>

      
    return (
      <Fragment>
      {this.state.showButtons=="1" && shButton}
       <div className="Top_Buttons">
         <h2>Товары в корзине:</h2>
         <div className="CartGood">{goodsInCart}</div>
         <input type="button" className="Top_Buttons" onClick={this.sendNewOrder} value="Заказать" />
     </div>
     </Fragment>
    );
    }
    }
  }
    

export default CartPage;
