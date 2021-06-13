import React from 'react';
import PropTypes from 'prop-types';

import './top.css';

import {pageEvents} from './events';

class Top extends React.PureComponent {

  static propTypes = {
   shopName:PropTypes.string,
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


 announce=()=>{
    console.log("Something has changed");
}


  render() {

    
    return (
     <div className="Top">
         <div>
             <span>{this.props.shopName}</span>
             <input type="text" onChange={this.remember}></input><input type="button" onClick={this.search}/>
         </div>
         <div>
             <input type="button" onClick={this.change1} value="Главная" />
             <input type="button" onClick={this.change2} value="Корзина" />
             <input type="button" onClick={this.change3} value="WishList" />
             <input type="button" onClick={this.change4} value="Регистрация" />
             <input type="button" onClick={this.change5} value="Войти" />
         </div>
     </div>
    );

  }

}

export default Top;
