import React from 'react';
import PropTypes from 'prop-types';


import Top from './top.js';
import MainBody from './bodymain.js';
import Footer from './footer.js';


import {pageEvents} from './events';



class Home extends React.PureComponent {


    static propTypes = {
        goods: PropTypes.array.isRequired,
        shopName: PropTypes.string.isRequired,
      };

      state = {
          goods:this.props.goods,
          toShowBodyMode:1, /** 1-Главная страница, 2 - Корзина, 3 - WishList, 4 - Страница регистрации, 5 - Страница входа */
          cart:null,
          wishList:null,
          toShowSentOrder:0,
        };



  componentDidMount = () => {
    pageEvents.addListener('ChangeBody',this.changeBody);
    pageEvents.addListener('Search',this.search);
    pageEvents.addListener('AddToCart',this.addToCart);
    pageEvents.addListener('AddToWishList',this.addToWishList);
    pageEvents.addListener('DeletefromCart',this.deletefromCart);
    pageEvents.addListener('DeletefromWishList',this.deletefromWishList);
    pageEvents.addListener('Order',this.order);
    };

    
  componentWillUnmount = () => {
    pageEvents.removeListener('ChangeBody',this.changeBody);
    pageEvents.removeListener('Search',this.search);
    pageEvents.removeListener('AddToCart',this.addToCart);
    pageEvents.removeListener('AddToWishList',this.addToWishList);
    pageEvents.removeListener('DeletefromCart',this.deletefromCart);
    pageEvents.removeListener('DeletefromWishList',this.deletefromWishList);
    pageEvents.removeListener('Order',this.order);


  };


  // работа  с заказом(когда он уже оформлен)

  order=()=>{
   this.setState({toShowSentOrder:1, toShowBodyMode:1, cart:null,}, this.announce);
  };

  finishOrderDemonstration=()=>{
    this.setState({toShowSentOrder:0,}, this.announce);
  };




  // работа с корзиной

   arrCart=[];

  addToCart=(id)=>{
    let goods=this.props.goods.slice();
    let elem=goods.find(item=>item.code===id);
    this.arrCart.push(elem);
    this.setState({cart:this.arrCart}, this.announce);
  };

  deletefromCart=(id)=>{
    let newCart=this.state.cart.slice();
    newCart=newCart.filter(item=>item.code!=id);
    this.setState({cart:newCart}, this.announce);
  };




  // работа с wishlist(ом)
  arrWishList=[];

  addToWishList=(id)=>{
    let goods=this.props.goods.slice();
    let elem=goods.find(item=>item.code===id);
    this.arrWishList.push(elem);
    this.setState({wishList:this.arrWishList}, this.announce);
  };
  
  deletefromWishList=(id)=>{
    let newWishList=this.state.wishList.slice();
    newWishList=newWishList.filter(item=>item.code!=id);
    this.setState({wishList:newWishList}, this.announce);
  }




// меняет  на /** 1-Главная страница, 2 - Корзина, 3 - WishList, 4 - Страница регистрации, 5 - Страница входа */
changeBody=(num)=>{
 if(num!=this.state.toShowBodyMode){
    this.setState({toShowBodyMode:num}, this.announce);
 }
};




//занимается поиском товаров
search=(word)=>{
    let needfulElem=this.props.goods.slice();
    needfulElem=needfulElem.filter(item=> item.itemName==word|| item.indexOf(word)!=-1);
    this.setState( { goods:needfulElem }, this.announce );
  
};





announce=()=>{
    console.log("Something has changed");
}
  


    render() {
        let categoriesCheck=this.props.goods.slice();
        let categories=[];
        categoriesCheck.forEach(elem=> {
         if (categories.indexOf(elem.category)===-1){
          categories.push(elem.category);
         }
        });
        let infoAboutOrder=<div className="Oder"><p>Ваш заказ оформлен!</p><p>В ближайшее время с Вами свяжется оператор.</p></div>
       let finishOrder=this.finishOrderDemonstration;

      return(
      <div>
      <Top shopName={this.props.shopName}/>
      <MainBody goods={this.state.goods} categories={categories} bodyChange={this.state.toShowBodyMode} cart={this.state.cart} wishList={this.state.wishList} />
      <Footer/>
      {this.state.toShowSentOrder==1 &&  setTimeout({infoAboutOrder}, 500) && setTimeout({finishOrder}, 2000)}
      </div>

      
      )
    };

  };
  
  

  export default Home;

