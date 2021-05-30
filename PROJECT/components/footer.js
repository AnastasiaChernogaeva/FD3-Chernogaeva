import React from 'react';
import PropTypes from 'prop-types';

import './footer.css';

import {pageEvents} from './events';

class Footer extends React.PureComponent {

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
  change=(EO)=>{
    pageEvents.emit('ChangeBody',EO.target.id);
 };

  render() {

    
    return (
        <div className="Footer">
         <ul>
         <li className="MainLi">
            <li><b>Моя страница</b></li>
             <li  onClick={this.change} id="5">Моя страница</li>
             <li  onClick={this.change} id="2">Корзина</li>
             <li  onClick={this.change} id="3">WishList</li>

         </li>
         <li className="MainLi">
            <li><b>Наши контакты</b></li>
            <li>г.Черас, проспект Марна,9</li>
            <li>80336853937</li>
            <li>sergeychernogaev1979@gmail.com</li>
            <li>7 дней в неделю с 08:00 до 20:30</li>
         </li>
         </ul>
        </div>
    );

  }

}

export default Footer;
