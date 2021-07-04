import React from 'react';
import PropTypes from 'prop-types';

import './wishList.css';
import './media1.css';
import './media2.css';
import './media3.css';



import {pageEvents} from './events';

class Order extends React.PureComponent {

  static propTypes = {
    info:PropTypes.object,
  };

  state = {
    order:this.props.info,
  };

/*  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient info="+this.props.info+" componentWillReceiveProps");
    if(this.state.info!=newProps.info){
      this.setState({info:newProps.info});
    }
    
  };*/




  announce=()=>{
    console.log("Something has changed");
}

  render() {
  
    
      return (
        <div className=" IsGoingToBeDeleted AnotherName" >
        <div className="goodImg">
          <img src={this.state.order.itemPhotoURL} alt={this.state.order.itemName}/>
        </div>
        <div className="Cost">
          <p><b>{this.state.order.itemName}</b></p> 
          <p>Цена за один экземпляр: {this.state.order.itemCost}</p> 
          <p> Количество : {this.state.order.orderAmoount}</p>
        </div>
        
    </div>
        );
    }

  }



export default Order;
