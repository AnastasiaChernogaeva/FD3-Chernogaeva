import React from 'react';
import PropTypes from 'prop-types';


import Top from './top.js';
import MainBody from './bodymain.js';
import Footer from './footer.js';


import {pageEvents} from './events';

var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
var updatePassword;
var stringName='Chernogeva_Anastasia_FD3_Project_Shop_CherAS';

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
    pageEvents.addListener('newPersonWantsToBeAddedToOurBigFamily',this.registrate);
    pageEvents.addListener('enter',this.enter);
    pageEvents.addListener('restore', this.restorePassword);

    };
    newPersonWantsToBeAddedToOurBigFamily

    
  componentWillUnmount = () => {
    pageEvents.removeListener('ChangeBody',this.changeBody);
    pageEvents.removeListener('Search',this.search);
    pageEvents.removeListener('AddToCart',this.addToCart);
    pageEvents.removeListener('AddToWishList',this.addToWishList);
    pageEvents.removeListener('DeletefromCart',this.deletefromCart);
    pageEvents.removeListener('DeletefromWishList',this.deletefromWishList);
    pageEvents.removeListener('Order',this.order);
    pageEvents.removeListener('newPersonWantsToBeAddedToOurBigFamily',this.registrate);
    pageEvents.removeListener('enter',this.enter);
    pageEvents.removeListener('restore', this.restorePassword);



  };


  // работа  с заказом(когда он уже оформлен)

restorePassword=(objAddInfoPerson)=>{
    
};


registrate=(personInfo)=>{
  updatePassword=Math.random();
    $.ajax( {
            url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
            data : { f : 'LOCKGET', n : stringName, p : updatePassword },
            success : this.lockGetReady, error : errorHandler
        }
    );
  
};
lockGetReady=(callresult)=>{
  if ( callresult.error!=undefined )
      alert(callresult.error);
  else {
      // нам всё равно, что было прочитано -
      // всё равно перезаписываем
      var info={
          name : document.getElementById('IName').value,
          age : document.getElementById('IAge').value
      };
      $.ajax( {
              url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
              data : { f : 'UPDATE', n : stringName, v : JSON.stringify(info), p : updatePassword },
              success : updateReady, error : errorHandler
          }
      );
  }
}

function updateReady(callresult) {
  if ( callresult.error!=undefined )
      alert(callresult.error);
}

function restoreInfo() {
  $.ajax(
      {
          url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
          data : { f : 'READ', n : stringName },
          success : readReady, error : errorHandler
      }
  );
}

function readReady(callresult) {
  if ( callresult.error!=undefined )
      alert(callresult.error);
  else if ( callresult.result!="" ) {
      var info=JSON.parse(callresult.result);
      document.getElementById('IName').value=info.name;
      document.getElementById('IAge').value=info.age;
  }
}

function errorHandler(jqXHR,statusStr,errorStr) {
  alert(statusStr+' '+errorStr);
}

restoreInfo();

enter=(personName)=>{

}

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

