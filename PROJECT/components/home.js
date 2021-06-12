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
          passwordCanBeChanged:false,
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

var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
var stringName='Chernogeva_Anastasia_FD3_Project_Shop_CherAS';
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

    fetch(ajaxHandlerScript, { method: 'post', body: sp })
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


registrate=(personInfo)=>{

var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
var updatePassword;
var stringName='Chernogeva_Anastasia_FD3_Project_Shop_CherAS';
/**$.ajax( {
  url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
  data : { f : 'UPDATE', n : stringName, v : JSON.stringify(personInfo), p : updatePassword },
  success :this.announce,
}*/

let sp = new URLSearchParams();
sp.append('f', 'UPDATE');
sp.append('n', stringName);
sp.append('v', JSON.stringify(personInfo));
sp.append('p', updatePassword);


fetch(ajaxHandlerScript, { method: 'post', body: sp })
    .then( response => response.json() )
    .then( () => this.announce())
    .catch( error => { console.error(error); } ); 

  
};
/*
workWithAjax=(personInfo)=>{
  var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
  var updatePassword;
  var stringName='Chernogeva_Anastasia_FD3_Project_Shop_CherAS';

  function readAjax(){
    $.ajax( {
                url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
                data : { f : 'READ', n : stringName },
                success : HH
    })
  }


function readAjax(){
  $.ajax( {
              url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
              data : { f : 'READ', n : stringName },
              success : HH
  })
}


function storeInfo() {
  updatePassword=Math.random();
  $.ajax( {
                url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
                data : { f : 'LOCKGET', n : stringName, p : updatePassword },
                success : lockGetReady, error : erRor
  });
}


function erRor(){

}

function lockGetReady(callresult) {
if ( callresult.error!=undefined )
alert(callresult.error);
else {
                                                playersStorage;
                                                $.ajax( {
                                                               url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
                                                               data : { f : 'UPDATE', n : stringName, v : JSON.stringify(playersStorage), p : updatePassword },
                                                               error : erRor
                                                });     
}                                         
}








function restoreInfo() {
  $.ajax({
               url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
               data : { f : 'READ', n : stringName },
               success : readReady
  });
}


var name;

function readReady(callresult) {
                                                    playersStorage=JSON.parse(callresult.result);
                                                    var keys=Object.keys(playersStorage);
console.log(keys);

                                                    var visibleTableRecords=document.getElementById('tableDiv');

                                                   if(keys.length>30){var optionalNum=keys.length-30; keys.length=30; keys=keys.slice(optionalNum-1)}

                                                    for (var i=0; i<keys.length; i++){
                                                                  name=keys[i];
                                                                  var previous;
                                                        if(name in playersStorage){
                                                                                            var newRow=document.createElement('tr');
                                                                                            if(previous!=undefined){
                                                                                            visibleTableRecords.insertBefore(newRow, previous);
                                                                                            }
                                                                                            else{
                                                                                            visibleTableRecords.appendChild(newRow);
                                                                                            }


                                                                                            var nRowTdName=document.createElement('td'); 
                                                                                            var nRowTdPercent=document.createElement('td'); 

                                                                                             nRowTdName.innerHTML=name;    
                                                                                             
                                                                                             if(playersStorage[name].games===playersStorage[name].victory){
                                                                                                                             nRowTdPercent.innerHTML='100%';    
                                                                                              }                              
                                                                                              else{
                                                                                                                             var num=(playersStorage[name].victory*100)/playersStorage[name].games;
                                                                                                                             nRowTdPercent.innerHTML=Math.round(num)*1+'%';    

                                                                                                      }

                                                                                             

                                                                                             newRow.appendChild(nRowTdName);
                                                                                             newRow.appendChild(nRowTdPercent);
                                                                                             previous=newRow;

                                                                           }

                                                    }                                             

};









function tableRecPage(){
         restoreInfo();
}


window.onbeforeunload=bUnload;



function bUnload(EO) {
      EO=EO||window.event;
     if ( condition!=4 )
                 EO.returnValue='При уходе со страницы игра будет не сохранена';

};



}*/
/*
storeInfo() {
  updatePassword=Math.random();
  $.ajax( {
          url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
          data : { f : 'LOCKGET', n : stringName, p : updatePassword },
          success : this.lockGetReady, error : this.errorHandler
      }
  );
}
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

 updateReady(callresult) {
  if ( callresult.error!=undefined )
      alert(callresult.error);
}

 restoreInfo() {
  $.ajax(
      {
          url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
          data : { f : 'READ', n : stringName },
          success : readReady, error : errorHandler
      }
  );
}

 readReady(callresult) {
  if ( callresult.error!=undefined )
      alert(callresult.error);
  else if ( callresult.result!="" ) {
      var info=JSON.parse(callresult.result);
      document.getElementById('IName').value=info.name;
      document.getElementById('IAge').value=info.age;
  }
}

 errorHandler(jqXHR,statusStr,errorStr) {
  alert(statusStr+' '+errorStr);
}

restoreInfo();
*/


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

