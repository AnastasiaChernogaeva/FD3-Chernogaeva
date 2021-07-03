
import React from 'react';
import PropTypes from 'prop-types';

import './top.css';

import {pageEvents} from './events';

class Top extends React.PureComponent {

  static propTypes = {
   shopName:PropTypes.string,
   personName:PropTypes.string,
   personLastName:PropTypes.string,
  };

  state = {
    searchWord:"",
    // typeTestB:"buttOn",
  };
/*
  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient info="+this.props.info+" componentWillReceiveProps");
    if(this.state.info!=newProps.info){
      this.setState({info:newProps.info});
    }
    
  };*/

  componentDidMount = () => {
    pageEvents.addListener("FinishSearch", this.finishSearch);
  };

    
  componentWillUnmount = () => {
    pageEvents.removeListener("FinishSearch", this.finishSearch);
  };

  finishSearch=(word)=>{
    let wWord=decodeURI(word);
    this.setState({searchWord:wWord,}, this.announce);
  }

 remember=(EO)=>{

   let word=EO.target.value.trim();
   word=word.toLowerCase();

     this.setState({searchWord:word,}, this.announce);
     pageEvents.emit("NoSuchItems", "" );

  
       
     
 }

 time=(EO)=>{
  if(EO.charCode==13){
    this.search();
   }
 }

 search=()=>{
   
    pageEvents.emit('Search', this.state.searchWord, "newWord");
 };

 change1=()=>{
    pageEvents.emit('ChangeBody',1);
 };

 change2=()=>{
  pageEvents.emit('ChangeBody',2);
};

change3=()=>{
  pageEvents.emit('ChangeBody',3);
};

change4=()=>{
  pageEvents.emit('ChangeBody',4);
};

change5=()=>{
  pageEvents.emit('ChangeBody',5);
};

change7=()=>{
  pageEvents.emit('ChangeBody',7);
};


logout=()=>{
  pageEvents.emit("WantToLogout",);
}


 announce=()=>{
    console.log("Something has changed");
}


  render() {
 let userCard=<div className="account"> 
 <p><span className="material-icons Light">account_circle</span></p>
 <p>{this.props.personName}</p>
 <p>{this.props.personLastName}</p>
 <input type="button" onClick={this.logout} className="Here" value="Выйти" />
</div>

let buttonsToRegisterAndToLogin=<div>
             <input type="button"  onClick={this.change4} value="Регистрация" />
             <input type="button"  onClick={this.change5} value="Войти" />
</div>

let MyOrders= <input type="button" onClick={this.change7} value="Mои заказы" />



    
    return (
     <div className="Top">
         <div  className="TopNameAndSearch">
             <p className="ShopName">{this.props.shopName}</p>
             <p className="ShopNameBackGround">{this.props.shopName}</p>
             <div className="Text"><input type="text" className="SearchEngine" onKeyPress={this.time} onChange={this.remember} value={this.state.searchWord}></input><button className="button_search" onClick={this.search}  ><span className="material-icons">search</span></button> 

             </div>
         </div>
        <br/>
       <div className="JustLikeThat">{this.props.personName!=="" && userCard} </div> 
       <div className="Butt">
         <div className="Top_Buttons First">
             <input type="button" /*testPrT1={this.state.typeTestB}*/id="FirstT" onClick={this.change1} value="Главная" />
             <input type="button" /*testPrT2={this.state.typeTestB}*/ id="SecT" onClick={this.change2} value="Корзина" />
             <input type="button" /*testPrT3={this.state.typeTestB}*/  id="ThT" onClick={this.change3} value="WishList" />
         </div>
         <div className="Top_Buttons Second">{this.props.personName==="" && buttonsToRegisterAndToLogin} </div>
         <div className="Top_Buttons Third">{this.props.personName!="" && MyOrders} </div>
         </div> 
     </div>
    );

  }

}

export default Top;