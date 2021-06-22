
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
  };
/*
  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient info="+this.props.info+" componentWillReceiveProps");
    if(this.state.info!=newProps.info){
      this.setState({info:newProps.info});
    }
    
  };*/
 remember=(EO)=>{
     this.setState({searchWord:EO.target.value,}, this.announce);
 }
 search=()=>{
    pageEvents.emit('Search', this.state.searchWord);
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

logout=()=>{
  pageEvents.emit("WantToLogout",);
}


 announce=()=>{
    console.log("Something has changed");
}


  render() {
 let userCard=<div className="account"> 
 <p>{this.props.personName}</p>
 <p>{this.props.personLastName}</p>
 <input type="button" onClick={this.logout} value="Выйти" />
</div>

let buttonsToRegisterAndToLogin=<div>
             <input type="button" onClick={this.change4} value="Регистрация" />
             <input type="button" onClick={this.change5} value="Войти" />
</div>

    
    return (
     <div className="Top">
         <div  className="TopNameAndSearch">
             <p className="ShopName">{this.props.shopName}</p>
             <p className="ShopNameBackGround">{this.props.shopName}</p>
             <div className="Text"><input type="text" className="SearchEngine" onChange={this.remember}></input> <input type="button" className="button_search" onClick={this.search}/></div>
         </div>
        <br/>
       <div>{this.props.personName!=="" && userCard} </div> 
         <div className="Top_Buttons First">
             <input type="button" onClick={this.change1} value="Главная" />
             <input type="button" onClick={this.change2} value="Корзина" />
             <input type="button" onClick={this.change3} value="WishList" />
         </div>
         <div className="Top_Buttons Second">{this.props.personName==="" && buttonsToRegisterAndToLogin} </div>
         
     </div>
    );

  }

}

export default Top;