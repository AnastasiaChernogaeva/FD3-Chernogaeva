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
 change=(EO)=>{
    pageEvents.emit('ChangeBody',EO.target.id);
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
             <input type="button" onClick="this.change" value="Главная" id="1"/>
             <input type="button" onClick="this.change" value="Корзина" id="2"/>
             <input type="button" onClick="this.change" value="WishList" id="3"/>
             <input type="button" onClick="this.change" value="Регистрация" id="4"/>
             <input type="button" onClick="this.change" value="Войти" id="5"/>
         </div>
     </div>
    );

  }

}

export default Top;
