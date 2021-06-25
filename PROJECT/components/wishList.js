import React from 'react';
import PropTypes from 'prop-types';

// import './wishList.css';

import WishGood from './wishgood';

import {pageEvents} from './events';

class WishListPage extends React.PureComponent {

  static propTypes = {
    wish:PropTypes.array,
  };

  // state = {
  //   elemToDelete:"",
  // };

/*  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient info="+this.props.info+" componentWillReceiveProps");
    if(this.state.info!=newProps.info){
      this.setState({info:newProps.info});
    }
    
  };*/

//   componentDidMount = () => {
//     pageEvents.addListener('WishListElemToAnimate',this.animate);
//   }

//   componentWillUnmount = () => {
//     pageEvents.removeListener('WishListElemToAnimate',this.animate);
//   }


// animate=(id)=>{
//  let wishList=this.props.wish.slice();
//  let elemToDelete=wishList.find(item=>item.code==id);
// this.setState({elemToDelete:elemToDelete,}, this.announce);
  
// }



  sendNewOrder=()=>{
    pageEvents.emit('Order',);
  }

  changeBody1=()=>{
    pageEvents.emit('ChangeBody',1);

  }
  
  announce=()=>{
    console.log("Something has changed");
}


  render() {

if(this.props.wish==null){
  return (
    <div className="Top_Buttons">
        <h2>У вас нет товаров в WishList</h2>
        <input type="button" onClick={this.changeBody1} value="Перейти на главную" />
    </div>
   );
    }
    else{
      let goodsInWisht=this.props.wish.slice();
      goodsInWisht=goodsInWisht.map(elem=>/* this.state.elemToDelete===elem?<WishGood className="IsGoingToBeDeleted" info={elem} key={elem.code}/> :*/<WishGood info={elem} key={elem.code}/>);
    
    return (
     <div className="Top_Buttons">
         <h2>Товары в корзине:</h2>
         <table className="CartGood"><tbody>{goodsInWisht}</tbody></table>
         <input type="button" onClick={this.sendNewOrder} value="Заказать" />
     </div>
    );
      
    }
  }

}

export default WishListPage;
