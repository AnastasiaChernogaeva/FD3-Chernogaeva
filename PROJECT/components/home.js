import React from 'react';
import PropTypes from 'prop-types';
import isoFetch from 'isomorphic-fetch';


// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import combinedReducer from '../redux/reducer.js';



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
          toShowBodyMode:1, /** 1-Главная страница, 2 - Корзина, 3 - WishList, 4 - Страница регистрации, 5 - Страница входа, 6 -  заказ принят */
          cart:null,
          wishList:null,
          passwordCanBeChanged:false,
          accountName:"",
          accountLastName:"",


          SPAState:{},


          categories:[],

          authorizatedName:"",
          authorizatedLastName:"",

        };


  componentDidMount = () => {

  this.makeCategories();

    window.onhashchange=this.switchToStateFromURLHash;

    pageEvents.addListener("WantToLogout", this.logout);
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

    
  componentWillUnmount = () => {
    pageEvents.removeListener("WantToLogout", this.logout);
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

  logout=()=>{
  this.setState({authorizatedName:"",   authorizatedLastName:"",},this.announce);
  }


  switchToStateFromURLHash=()=>{
    var URLHash=window.location.hash;
    var stateStr=URLHash.substr(1);

    if ( stateStr!="" ) { // если закладка непустая, читаем из неё состояние и отображаем
      var parts=stateStr.split("_")
      this.setState({SPAState:{ pagename: this.state.toShowBodyMode, }}, this.announce); // первая часть закладки - номер страницы
      if ( this.state.SPAState.pagename==1 )
        this.state.SPAState.pagenumnavigation=parts[0]/*navigation[0]*/; // для фото нужна ещё вторая часть закладки - номер фото
    }
    else
    this.setState({SPAState:{pagename:'Main'}}, this.announce); 

    console.log('Новое состояние приложения:');
    console.log(this.state.SPAState);
  };

   switchToState=(newState)=>{
    var stateStr=newState.pagename;
    if ( newState.pagename==1)
      stateStr+="_"+newState.pagenumnavigation;
    location.hash=stateStr;

    this.switchToStateFromURLHash();
  }


 // меняет  на /** 1-Главная страница, 2 - Корзина, 3 - WishList, 4 - Страница регистрации, 5 - Страница входа */
changeBody=(num)=>{
  if(num!=this.state.toShowBodyMode){
     this.setState({toShowBodyMode:num}, this.switchState);
  }
 };

 switchState=()=>{
  switch ( this.state.toShowBodyMode) {
    case 1:
      this.switchToState( { pagename:'Main' } );
      break;
    case 2:
      this.switchToState( { pagename:'Cart' } );
      break;
    case 3:
      this.switchToState( { pagename:'WishList' } );
      break;
    case 4:
      this.switchToState( { pagename:'Registration' } );
      break;
    case 5:
      this.switchToState( { pagename:'Login' } );
      break;
  };
 }


  // работа  с заказом(когда он уже оформлен)

restorePassword=(objAddInfoPerson)=>{

var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
var stringName='Chernogeva_Project_CherAS';
 /** $.ajax(
    {
        url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
        data : { f : 'READ', n : stringName },
        success : this.readReady(objAddInfoPerson),
    }
*/
  let sp = new URLSearchParams();
    sp.append('f', 'READ');
    sp.append('n', stringName);

    isoFetch(ajaxHandlerScript, { method: 'post', body: sp })
        .then( response => response.json() )
        .then( data => {this.readReady(objAddInfoPerson, data) } )
        .catch( error => { console.error(error); } ); 

}

readReady(objAddInfoPerson, callresult) {
if ( callresult.error!=undefined )
    console.log(callresult.error);
else if ( callresult.result!="" ) {
    var info=JSON.parse(callresult.result);
    let pet=info.find(elem=>elem.pet===objAddInfoPerson.pet);
    let color=info.find(elem=>elem.color===objAddInfoPerson.color);
    let year=info.find(elem=>elem.year===objAddInfoPerson.year);
    this.equalAddInformationAboutPersonToRestorePassword(pet,color,year);
}
};


equalAddInformationAboutPersonToRestorePassword(pet,color,year){
  if(pet||color||year!=undefined||null){
    this.setState({passwordCanBeChanged:true,}, this.announce);
  }
  else{
    this.setState({passwordCanBeChanged:false,}, this.announce);
  }
  pageEvents.emit('PasswordChanged', this.state.passwordCanBeChanged)
}

clients={};

registrate=(/*personInfo*/ key,value)=>{

var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
var updatePassword=Math.random();
var stringName='Chernogeva_Project_CherAS';
this.clients[key]=value;

let sp = new URLSearchParams();
sp.append('f', 'LOCKGET');
sp.append('n', stringName);
sp.append('p', updatePassword);

isoFetch(ajaxHandlerScript, { method: 'post', body: sp })
    .then( response => response.json() )
    .then( () => this.continuation(stringName,updatePassword))
    .catch( error => { console.error(error); } ); 

  
};

continuation=(stringName, updatePassword )=>{
  var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
let sp = new URLSearchParams();
sp.append('f', 'UPDATE');
sp.append('n', stringName);
sp.append('p', updatePassword);
sp.append('v', JSON.stringify(this.clients));


isoFetch(ajaxHandlerScript, { method: 'post', body: sp })
    .then( response => response.json() )
    .then( () => {console.log("congratulations!!!");})
    .catch( error => { console.error(error); } ); 


};




enter=(personName)=>{
 var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
  var stringName='Chernogeva_Project_CherAS';
  let sp = new URLSearchParams();
  sp.append('f', 'READ');
  sp.append('n', stringName);
  
  
  isoFetch(ajaxHandlerScript, { method: 'post', body: sp })
      .then( response => response.json() )
      .then( data => this.checkPasswordsInOurSystem(data,personName))
      .catch( error => { console.log(error); } ); 


};

checkPasswordsInOurSystem=(serverData,userData)=>{
  let sData=JSON.parse(serverData.result);
  console.log(sData);
  let allKeys=Object.keys(sData);
  let personWeNeed=allKeys.find(client=>client==userData);
  if(personWeNeed!=undefined){
  let allInfoAboutPersonWeNeed=sData[personWeNeed];
    let name=allInfoAboutPersonWeNeed.name;
    let lastName=allInfoAboutPersonWeNeed.lastName;
    this.setState({authorizatedName:name, authorizatedLastName:lastName,}, this.announce);
  }
};




  order=()=>{
   this.setState({ toShowBodyMode:6,}, this.announce);
  };





  // работа с корзиной

  arrCart=[];

  addToCart=(id)=>{
    if(this.arrCart==null){
      this.arrCart=[];
    }
    let goods=this.props.goods.slice();
    let elem=goods.find(item=>item.code===id);
    if(this.arrCart.indexOf(elem)===-1){
      this.arrCart.push(elem);
      this.setState({cart:this.arrCart}, this.announce);
    }
  };

  deletefromCart=(id)=>{
    // this.animation(id, "cart");
    this.arrCart=this.arrCart.filter(item=>item.code!=id);
    if(this.arrCart.length==0){
      this.arrCart=null;
    }
    this.setState({cart:this.arrCart}, this.announce);
  };




  // работа с wishlist(ом)
   arrWishList=[];

  addToWishList=(id)=>{
    if(this.arrWishList==null){
      this.arrWishList=[];
    }
    let goods=this.state.goods.slice();
    let elem=goods.find(item=>item.code===id);
    if(this.arrWishList.indexOf(elem)===-1){
      this.arrWishList.push(elem);
      this.setState({wishList:this.arrWishList}, this.announce);
    }
  };
  
  deletefromWishList=(id)=>{
    // this.animation(id, "wishlist");
    this.arrWishList=this.arrWishList.filter(item=>item.code!=id);
    if(this.arrWishList.length==0){
      this.arrWishList=null;
    }
    this.setState({wishList:this.arrWishList}, this.announce);
  }


// animation=(id, typeofdelete)=>{
// if(typeofdelete==="cart"){
//   // elemNeededToDelete=this.arrCart.find(item=>item.code==id);
//   pageEvents.emit("CartElemToAnimate",id);
// }
// if(typeofdelete==="wishlist"){
//   // elemNeededToDelete=this.arrWishList.find(item=>item.code==id);
//   pageEvents.emit("WishListElemToAnimate",id);
// }

// }






//занимается поиском товаров
search=(word)=>{
  var regexp = new RegExp(word);
    let needfulElem=this.props.goods.slice();
    let allApropriateElems=[];
    needfulElem=needfulElem.filter(item=>{
      if(item.itemName.search(regexp)!=-1){
        allApropriateElems.push(item);
        console.log(`${item.itemName}  подходит`);
      }
      else if(item.category.search(regexp)!=-1){
              allApropriateElems.push(item);
              console.log(`${item.itemName}  подходит`);
            }
      else{
                console.log(`${item.itemName} не подходит`);
            }
    });
    this.setState( { goods:allApropriateElems }, this.announce );
  
};

makeCategories=()=>{
  let categoriesCheck=this.props.goods.slice();
  let categories=[];
  categoriesCheck.forEach(elem=> {
   if (categories.indexOf(elem.category)===-1){
    categories.push(elem.category);
   }
  });
  if(categories!=[]){
    this.setState({categories:categories},this.announce);
  }
}


announce=()=>{
    console.log("Something has changed");
}
  


    render() {


      return(
      // <Provider>
      <div>
      <Top shopName={this.props.shopName} personName={this.state.authorizatedName} personLastName={this.state.authorizatedLastName}/>
      <MainBody goods={this.state.goods} categories={this.state.categories} bodyChange={this.state.toShowBodyMode} cart={this.state.cart} wishList={this.state.wishList} />
      <Footer/>
      
      </div>
      // </Provider>
      
      )
    };

  };
  
  

  export default Home;

