import React from 'react';
import PropTypes from 'prop-types';

import './mobileClients.css';

import {pageEvents} from './events';

class BodyShop extends React.PureComponent {

  static propTypes = {
   shopName:PropTypes.string,
  };

  /*state = {
    
  };

  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient info="+this.props.info+" componentWillReceiveProps");
    if(this.state.info!=newProps.info){
      this.setState({info:newProps.info});
    }
    
  };*/
 search=()=>{};
 change=()=>{};

  render() {

    
    return (
     <div>
         <div>
             <span>{this.props.shopName}</span>
             <input type="text"></input><input type="button" onClick={this.search}/>
         </div>
         <div>
             <input type="button" onClick="this.change" value="Главная"/>
             <input type="button" onClick="this.change" value="Корзина"/>
             <input type="button" onClick="this.change" value="WishList"/>
             <input type="button" onClick="this.change" value="Регистрация"/>
             <input type="button" onClick="this.change" value="Войти"/>
         </div>
     </div>
    );

  }

}

export default BodyShop;
