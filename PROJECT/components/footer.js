import React from 'react';
import PropTypes from 'prop-types';

import './footer.css';
import './media1.css';
import './media2.css';
import './media3.css';
import './shop.css';


import {pageEvents} from './events';

class Footer extends React.PureComponent {

  static propTypes = {
   personName:PropTypes.string,
  };

  change5=()=>{
    if(this.props.personName=="")
    pageEvents.emit('ChangeBody',5);
    else
    pageEvents.emit('ChangeBody',1);
 };
 change2=()=>{
  pageEvents.emit('ChangeBody',2);
};
change3=()=>{
  pageEvents.emit('ChangeBody',3);
};

  render() {

    
    // return (
    //     <div className="Footer">
    //      <table>
    //        <tbody>
    //          <tr>
    //            <th>Моя страница</th>
    //            <th>Наши контакты </th>
    //          </tr>
    //          <tr><td><br/></td></tr>
    //          <tr>
    //             <td><button /*testPr1={this.state.typeTestB}*/ id="FirstF" onClick={this.change5 } ><span className="material-icons"> person</span>Моя страница</button></td>
    //             <td><span className="material-icons">room</span>  г.Черас, проспект Марна,9</td>
    //          </tr>
    //          <tr>
    //             <td><button /*testPr2={this.state.typeTestB}*/ id="SecF" onClick={this.change2} ><span className="material-icons"> shopping_cart</span>Корзина</button></td>
    //             <td><span className="material-icons"> call</span>80336853937</td>
    //          </tr>
    //          <tr>
    //             <td><button  /*testPr3={this.state.typeTestB}*/ id="ThF" onClick={this.change3} ><span className="material-icons"> favorite</span>WishList</button></td>
    //             <td><span className="material-icons"> email</span>sergeychernogaev1979@gmail.com</td>
    //          </tr>
    //          <tr>
    //             <td></td>
    //             <td><span className="material-icons"> schedule</span>7 дней в неделю с 08:00 до 20:30</td>
    //          </tr>
             
    //        </tbody>
    //      </table>
    //     </div>
    // );

    return (
      <div className="Footer">
       <div className="F">
             <h2>Моя страница</h2>
           <p><button /*testPr1={this.state.typeTestB}*/ id="FirstF" onClick={this.change5 } ><span className="material-icons"> person</span>  Моя страница</button></p>
            <p><button /*testPr2={this.state.typeTestB}*/ id="SecF" onClick={this.change2} ><span className="material-icons"> shopping_cart</span>  Корзина</button></p>

              <p><button  /*testPr3={this.state.typeTestB}*/ id="ThF" onClick={this.change3} ><span className="material-icons"> favorite</span>  Мои Желания</button></p>
         
           
       </div>
           <div className="S">
           <h2>Наши контакты </h2>
         <p><span className="material-icons">room</span>   г.Черас, проспект Марна,9</p>
        <p><span className="material-icons"> call</span>  80336853937</p>
        <p><span className="material-icons"> email</span>  sergeychernogaev1979@gmail.com</p>
         <p><span className="material-icons"> schedule</span>  7 дней в неделю с 08:00 до 20:30</p>
        
         
     </div>
      </div>
  );

  }

}

export default Footer;
