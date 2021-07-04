import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './wishList.css';
import './media1.css';
import './media2.css';
import './media3.css';
import './shop.css';


import WishGood from './wishgood';

import {pageEvents} from './events';

class WishListPage extends React.PureComponent {

  static propTypes = {
    wish:PropTypes.array,
  };

  state = {
    showButtons:"",
    amount:{},
  };


  componentDidMount = () => {
    window.onbeforeunload=this.befUnload;
    pageEvents.addListener('ShouldLoginOrSignup',this.showButtons);
    pageEvents.addListener('amountToOrder',this.amountToOrder);

  }

  componentWillUnmount = () => {
    pageEvents.removeListener('ShouldLoginOrSignup',this.showButtons);
    pageEvents.removeListener('amountToOrder',this.amountToOrder);

  }

  befUnload=(EO)=>{
    EO=EO||window.event;
    // если текст изменён, попросим браузер задать вопрос пользователю
    if ( this.props.wish!=null)
      EO.returnValue='А у вас есть несохранённые изменения!';
  };


amountToOrder=(quantity, code)=>{
this.state.amount[code]=quantity;
}

showButtons=()=>{
  this.setState({showButtons:"1",},this.announce);
}

  sendNewOrder=()=>{
    var orderTosend=[];
    let goodsToOrder=this.props.wish.slice();
    goodsToOrder=goodsToOrder.map((elem,i)=>{
      let orderProduct=goodsToOrder[i];
      if (elem.code in this.state.amount){
        orderProduct['orderAmoount']=this.state.amount[elem.code]+1;
      }
      else
      orderProduct['orderAmoount']=1;
      orderTosend.push(elem);
    })
    pageEvents.emit('Order', /*this.props.wish*/ orderTosend, "wish");
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

if(this.props.wish==null){
  return (
    <div className="Top_Buttons">
        <h2>У вас нет товаров в списке "Мои Желания"</h2>
        <input type="button" onClick={this.changeBody1} value="Перейти на главную" />
    </div>
   );
    }
    else{
      let goodsInWisht=this.props.wish.slice();
      goodsInWisht=goodsInWisht.map(elem=>/* this.state.elemToDelete===elem?<WishGood className="IsGoingToBeDeleted" info={elem} key={elem.code}/> :*/<WishGood info={elem} key={elem.code} />);
    
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
         <h2>Товары в списке "Мои Желания":</h2>
           <div className="CartGood">{goodsInWisht}</div>
           <input type="button" className="Top_Buttons" onClick={this.sendNewOrder}	 value="Заказать" />
     </div>
     </Fragment>
    );
    }
  }

}

export default WishListPage;
