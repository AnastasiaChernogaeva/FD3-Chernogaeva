import React from 'react';
import PropTypes from 'prop-types';
import isoFetch from 'isomorphic-fetch';


import './home.css';
import './error.css';


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
          toShowBodyMode:1, /** 1-Главная страница, 2 - Корзина, 3 - WishList, 4 - Страница регистрации, 5 - Страница входа, 6 -  заказ принят, 7 - мои заказы */
          cart:null,
          wishList:null,
          passwordCanBeChanged:false,
          personWantToChangePassword:{},
          accountName:"",
          accountLastName:"",


          // SPAState:{},


          categories:[],

          authorizatedName:"",
          authorizatedLastName:"",

          typeSearch:"",
          pagenumnavigation:"",

          textToShowAbsecnceOfitem:"",

          textAboutWrongPassword:"",
          pagesnum:"",

          orderList:"",

          clients:{},
        };


  componentDidMount = () => {

  this.makeCategories();
  this.checkMeaningOfClientsStart();

    window.onload=this.switchToStateFromURLHash;
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
    pageEvents.addListener('PageChange',  this.pageChange);
    pageEvents.addListener('saveNewPassword',  this.saveNewPassword);

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
    pageEvents.removeListener('PageChange', this.pageChange);
    pageEvents.addListener('saveNewPassword',  this.saveNewPassword);




  };

  logout=()=>{
  this.setState({authorizatedName:"",   authorizatedLastName:"",},this.announce);
  }




  switchToStateFromURLHash=()=>{
    var URLHash=window.location.hash;
    var stateStr=URLHash.substr(1);

    if ( stateStr!="" ) { // если закладка непустая, читаем из неё состояние и отображаем
      var parts=stateStr.split("_")
      switch ( parts[0] ){
        case 'Main': 
         if (parts.length!=1){
          //  switch(parts[1]){
          //    case "numPage":
          //     this.setState({pagename: parts[0], typeSearch:parts[1], pagenumnavigation:parts[2], pagesnum:parts[3], toShowBodyMode:1,}, this.newPage);
          //     break;
          //    case "category":
          //     this.setState({pagename: parts[0], typeSearch:parts[1], pagenumnavigation:parts[2], pagesnum:parts[3], toShowBodyMode:1,}, this.newCategoryPage);
          //     break;
          //   }
                    this.setState({pagename: parts[0], typeSearch:parts[1], pagenumnavigation:parts[2], pagesnum:parts[3], toShowBodyMode:1,}, this.newPage);

         }
         else{
          this.setState({ pagename: parts[0], toShowBodyMode:1,}, this.announce);
         }
          break;
        case 'Cart':
          this.setState({ pagename: parts[0], typeSearch:"", pagenumnavigation:"", pagesnum:"", toShowBodyMode:2,}, this.announce);
          break;
        case 'WishList':
            this.setState({ pagename: parts[0],typeSearch:"", pagenumnavigation:"", pagesnum:"", toShowBodyMode:3,}, this.announce);
            break;
        case 'Registration':
            this.setState({pagename: parts[0],typeSearch:"", pagenumnavigation:"", pagesnum:"", toShowBodyMode:4,}, this.announce);
            break;
        case 'Login':
            this.setState({pagename: parts[0], typeSearch:"", pagenumnavigation:"", pagesnum:"", toShowBodyMode:5,}, this.announce);
             break;
        case 'Order':
            this.setState({ pagename: parts[0], typeSearch:"", pagenumnavigation:"", pagesnum:"", toShowBodyMode:6,}, this.announce);
            break;

      }
    }
    else
    this.setState({pagename:'Main'}, this.announce); 

  };

  newPage=()=>{
    pageEvents.emit("GiveUPageNum",this.state.pagesnum);
    if(this.state.typeSearch=="category")
      this.search(this.state.pagenumnavigation,"loadPeriod")
  }

  newCategoryPage=()=>{
    this.search(this.state.pagenumnavigation);
    this.newPage(this.state.pagesnum);
  }
  

   switchToState=(newState)=>{
    var stateStr=newState.pagename;
    if ( newState.pagename=='Main'){
      (newState.typeSearch!=undefined)?(stateStr+="_"+newState.typeSearch+"_"+newState.pagenumnavigation+"_"+newState.pagesnum):null;
    }
   
    location.hash=stateStr;

    // this.switchToStateFromURLHash();
  }


 // меняет  на /** 1-Главная страница, 2 - Корзина, 3 - WishList, 4 - Страница регистрации, 5 - Страница входа */
changeBody=(num)=>{
  if(num!=this.state.toShowBodyMode){
     this.setState({toShowBodyMode:num}, this.switchState);
  }
 };

 pageChange=(numPage)=>{
   if(this.state.typeSearch!="")
  this.setState({/*pagenumnavigation:numPage, typeSearch:"numPage",*/ pagesnum:numPage,}, this.switchState);
  else
  this.setState({pagenumnavigation:numPage, typeSearch:"numPage", pagesnum:numPage,}, this.switchState);
 }

 switchState=()=>{
  switch ( this.state.toShowBodyMode) {
    case 1:
      switch(this.state.typeSearch){
        case "category":
          let typeSearchC=this.state.typeSearch;
          if(this.state.pagenumnavigation!="" &&this.state.pagesnum!=""){
            let word=this.state.pagenumnavigation;
            let num=this.state.pagesnum;
            this.switchToState( { pagename:'Main', pagenumnavigation:word, typeSearch:typeSearchC, pagesnum:num,} );
          }
          break;
        case "item":
          let typeSearchI=this.state.typeSearch;
          if(this.state.pagenumnavigation!=""){
            let word=this.state.pagenumnavigation;
            this.switchToState( { pagename:'Main', pagenumnavigation:word, typeSearch:typeSearchI,} );
          }
          break;
        case "numPage":
          let typeSearchN=this.state.typeSearch;
          if(this.state.pagenumnavigation!=""){
            let num=this.state.pagesnum;
            this.switchToState( { pagename:'Main', pagenumnavigation:num,  typeSearch:typeSearchN, pagesnum:num,} );
          }
          break;
        default:
          this.setState({typeSearch:"", pagenumnavigation:"", pagesnum:""}, this.announce);
          this.switchToState( { pagename:'Main'} );
          break;
        
      }
      break;
    case 2:
      this.setState({typeSearch:"", pagenumnavigation:"", pagesnum:""}, this.announce);
      this.switchToState( { pagename:'Cart' } );
      break;
    case 3:
      this.setState({typeSearch:"", pagenumnavigation:"", pagesnum:""}, this.announce);
      this.switchToState( { pagename:'WishList' } );
      break;
    case 4:
      this.setState({typeSearch:"", pagenumnavigation:"", pagesnum:""}, this.announce);
      this.switchToState( { pagename:'Registration' } );
      break;
    case 5:
      this.setState({typeSearch:"", pagenumnavigation:"", pagesnum:""}, this.announce);
      this.switchToState( { pagename:'Login' } );
      break;
    case 6:
      this.setState({typeSearch:"", pagenumnavigation:"", pagesnum:""}, this.announce);
      this.switchToState( { pagename:'Order' } );
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
        .catch( error => { console.log(error); } ); 

}

readReady(objAddInfoPerson, data) {
    var info=JSON.parse(data.result);


    let arrNames=Object.keys(info);
    arrNames.forEach(elemKey=>{
      let person;
      for (elemKey in info){
        if(info[elemKey].pet===objAddInfoPerson.pet){
          if(info[elemKey].color===objAddInfoPerson.color){
            if(info[elemKey].year==objAddInfoPerson.year/*||elemKey.year!=objAddInfoPerson.year*/){
               person=elemKey;
              this.setState({passwordCanBeChanged:true, personWantToChangePassword:person,}, this.announce);
            }
      }
    }
  }
      if(person!=undefined)
        this.setState({passwordCanBeChanged:true,  personWantToChangePassword:person,}, this.announce);
      else
        this.setState({passwordCanBeChanged:false,}, this.announce);

      pageEvents.emit('PasswordChanged', this.state.passwordCanBeChanged, /*this.state.personWantToChangePassword*/ );
   
    }
      )
};

// equalAddInformationAboutPersonToRestorePassword(pet,color,year){
//   if(pet||color||year!=undefined||null){
//     this.setState({passwordCanBeChanged:true,}, this.announce);
//   }
//   else{
//     this.setState({passwordCanBeChanged:false,}, this.announce);
//   }
//   pageEvents.emit('PasswordChanged', this.state.passwordCanBeChanged)
// }

saveNewPassword=(password)=>{
  var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
  var updatePassword=Math.random();
  var stringName='Chernogeva_Project_CherAS';
  let personDivided=this.state.personWantToChangePassword.split("_");
  personDivided[personDivided.length-1]=password;
  let personKey=personDivided.join("_");
  let rememberValue=this.state.clients[this.state.personWantToChangePassword];
  delete this.state.clients[this.state.personWantToChangePassword];
  this.state.clients[personKey]=rememberValue;
  this.state.clients[personKey].password=password;


  this.setState({personWantToChangePassword:personKey, /*clients:newClients,*/}, this.announce);

  
  let sp = new URLSearchParams();
  sp.append('f', 'LOCKGET');
  sp.append('n', stringName);
  sp.append('p', updatePassword);
  
  isoFetch(ajaxHandlerScript, { method: 'post', body: sp })
      .then( response => response.json() )
      .then( () => this.continuation(stringName,updatePassword))
      .catch( error => { console.error(error); } ); 
  
    
  };
  
  // continuation=(stringName, updatePassword )=>{
  //   var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
  // let sp = new URLSearchParams();
  // sp.append('f', 'UPDATE');
  // sp.append('n', stringName);
  // sp.append('p', updatePassword);
  // sp.append('v', JSON.stringify(this.clients));
  
  
  // isoFetch(ajaxHandlerScript, { method: 'post', body: sp })
  //     .then( response => response.json() )
  //     .then( () => {console.log("congratulations!!!");})
  //     .catch( error => { console.error(error); } ); 
  
  
  // };


  checkMeaningOfClientsStart=()=>{

    var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
    var stringName='Chernogeva_Project_CherAS';

      let sp = new URLSearchParams();
        sp.append('f', 'READ');
        sp.append('n', stringName);
    
        isoFetch(ajaxHandlerScript, { method: 'post', body: sp })
            .then( response => response.json() )
            .then( data => {this.checkMeaningOfClients(data) } )
            .catch( error => { console.log(error); } ); 
    
    }
  
checkMeaningOfClients=(callresult)=>{            
    if (callresult){
      this.setState({clients:JSON.parse(callresult.result),}, this.announce);
                  //  playersStorage=JSON.parse(callresult.result); 
    }
    else{
      this.setState({clients:{},}, this.announce);

                  //  playersStorage={};
    }
  //  return playersStorage;

}

registrate=(/*personInfo*/ key,value)=>{

var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
var updatePassword=Math.random();
var stringName='Chernogeva_Project_CherAS';
// this.clients[key]=value;
this.state.clients[key]=value;

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
sp.append('v', JSON.stringify(this.state.clients));


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
      .catch( error => {console.log(error)}); 


};

wrongPassword=(error)=>{
  console.log(error);
this.setState({textAboutWrongPassword:"1",}, this.emitWrongPassword);
}

emitWrongPassword=()=>{
  pageEvents.emit("wrongPage", this.state.textAboutWrongPassword);
}

checkPasswordsInOurSystem=(serverData,userData)=>{
  let sData=JSON.parse(serverData.result);
  // console.log(sData);
  let allKeys=Object.keys(sData);
  let personWeNeed=allKeys.find(client=>client==userData);
  if(personWeNeed!=undefined){
  let allInfoAboutPersonWeNeed=sData[personWeNeed];
    let name=allInfoAboutPersonWeNeed.name;
    let lastName=allInfoAboutPersonWeNeed.lastName;
    this.setState({authorizatedName:name, authorizatedLastName:lastName,  toShowBodyMode:1,}, this.announce);
  }
  else{
    this.wrongPassword();
  }
};




  order=(orderList)=>{
  if(this.state.authorizatedName!="")
   this.setState({ toShowBodyMode:6,  orderList:orderList,}, this.announce);
  else
   pageEvents.emit('ShouldLoginOrSignup',);
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
search=(word, typeSearchImportant)=>{
  let newWordHere=decodeURI(word);
  if(newWordHere==="all"){
    if(window.location.hash!="#Main"){
      // let needfulElem=this.props.goods.slice();
      this.setState( { goods:this.props.goods, typeSearch:"", pagenumnavigation:"", }, this.switchState );
    }
  return;
  }
  else{
    var regexp = new RegExp(newWordHere);
    let needfulElem=this.props.goods.slice();
    let allApropriateElems=[];
    let textK;
    let typeSearchMean;

    if (typeSearchImportant=="newCategory"||typeSearchImportant=="newWord"){
      needfulElem=needfulElem.filter(item=>{
        if(item.itemName.search(regexp)!=-1){
          allApropriateElems.push(item);
          typeSearchMean="item";
          this.setState( {  typeSearch:typeSearchMean,  pagenumnavigation:word,}, this.switchState );
          // console.log(`${item.itemName}  подходит`);
       }
        else if(item.category.search(regexp)!=-1){
              allApropriateElems.push(item);
              typeSearchMean="category";         
              // let num=this.state.pagesnum;     
              this.setState( {  typeSearch:typeSearchMean, pagenumnavigation:newWordHere, pagesnum:1,}, this.switchState );
            }
        else if(item.category.search(regexp)===-1 && item.itemName.search(regexp)===-1){
         textK=`Данный товар '${word}' не был найден.`;
         this.setState( {  textToShowAbsecnceOfitem:textK, }, this.announce );
            }
        });
        // if (allApropriateElems===[]){
        //   textK=`Данный товар '${word}' не был найден.`;
        //   this.setState( {  textToShowAbsecnceOfitem:textK,  goods:allApropriateElems, }, this.sayIt );
        // }
        // else
            this.setState( { goods:allApropriateElems,pagenumnavigation:newWordHere, }, this.announce );
   }
   else if(typeSearchImportant=="loadPeriod"){
    needfulElem=needfulElem.filter(item=>{
      if(item.category.search(regexp)!=-1){
              allApropriateElems.push(item);
            }
        });
   
    this.setState( { goods:allApropriateElems, }, this.announce );
   }
   }
  
};

sayIt=()=>{
  pageEvents.emit("NoSuchItems", this.state.textToShowAbsecnceOfitem );
}

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


    if(this.state.typeSearch!=""){
      return(
        // <Provider>
        <div className="body_body"> 
        <Top shopName={this.props.shopName} personName={this.state.authorizatedName} personLastName={this.state.authorizatedLastName}/>
        <MainBody goods={this.state.goods} categories={this.state.categories}   bodyChange={this.state.toShowBodyMode} cart={this.state.cart} wishList={this.state.wishList} />
        <Footer/>
  
        {/* <div className="N_T">{nnn!=""?this.state.textAboutWrongPassword:null}</div> */}
        
        </div>
        // </Provider>
        
        )
    }
    else{
      return(
        // <Provider>
        <div className="body_body"> 
        <Top shopName={this.props.shopName} personName={this.state.authorizatedName} personLastName={this.state.authorizatedLastName}/>
        <MainBody goods={this.props.goods} categories={this.state.categories}   bodyChange={this.state.toShowBodyMode} cart={this.state.cart} wishList={this.state.wishList} />
        <Footer/>
  
        {/* <div className="N_T">{this.state.textAboutWrongPassword!=""&&this.state.textAboutWrongPassword}</div> */}
        
        </div>
        // </Provider>
        
        )
    }
      
    };

  };
  
  

  export default Home;

