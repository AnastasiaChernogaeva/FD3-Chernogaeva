import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './wishList.css';
import './media1.css';
import './media2.css';
import './media3.css';
import './shop.css';


import Order from './order';

import {pageEvents} from './events';

class MyOrder extends React.PureComponent {

  // static propTypes = {
  //   ord:PropTypes.array,
  // };

  state = {
    orderList:"",
  };

/*  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient info="+this.props.info+" componentWillReceiveProps");
    if(this.state.info!=newProps.info){
      this.setState({info:newProps.info});
    }
    
  };*/

  componentDidMount = () => {
    pageEvents.addListener('NewOrderList', this.showList);
  }

  componentWillUnmount = () => {
    pageEvents.removeListener('NewOrderList', this.showList);
  }


  showList=(list)=>{
    this.setState({orderList:list}, this.announce);
  }

// animate=(id)=>{
//  let wishList=this.props.wish.slice();
//  let elemToDelete=wishList.find(item=>item.code==id);
// this.setState({elemToDelete:elemToDelete,}, this.announce);
  
// }

// showButtons=()=>{
//   this.setState({showButtons:"1",},this.announce);
// }

//   sendNewOrder=()=>{
//     pageEvents.emit('Order',);
//   }

  changeBody1=()=>{
    pageEvents.emit('ChangeBody',1);

  }

  
//  change4=()=>{
//    pageEvents.emit('ChangeBody',4);
//  };

//  change5=()=>{
//    pageEvents.emit('ChangeBody',5);
//  };
  
  announce=()=>{
    console.log("Something has changed");
}


  render() {

if(this.state.orderList==""){
  return (
    <div className="Top_Buttons">
        <h2>У вас нет оформленных заказов</h2>
        <input type="button" onClick={this.changeBody1} value="Перейти на главную" />
    </div>
   );
    }
    else{
      let completedHereOrders=this.state.orderList.slice();
      completedHereOrders=completedHereOrders.map(elem=><Order info={elem} key={elem.code}/>);
      // let goodsInWisht=this.props.wish.slice();
      // goodsInWisht=goodsInWisht.map(elem=><WishGood info={elem} key={elem.code}/>);
      
      
    return (
     <div className="Top_Buttons">
         <h2>Заказанные товары:</h2>
           <div className="CartGood">{completedHereOrders}</div>
           <input type="button"  onClick={this.changeBody1} value="Перейти на главную" />
     </div>
    );
    }
  }

}

export default MyOrder;
