import React from 'react';
import PropTypes from 'prop-types';

/*import './mobileClients.css';*/

import {pageEvents} from './events';

class WishGood extends React.PureComponent {

  static propTypes = {
    info:PropTypes.array,
  };

  state = {
    wishgood:this.props.info,
    amountToOrder:1,
    disabledMinus:null,
    disabledPlus:null,
  };

/*  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient info="+this.props.info+" componentWillReceiveProps");
    if(this.state.info!=newProps.info){
      this.setState({info:newProps.info});
    }
    
  };*/

  deletefromWishList=()=>{
    pageEvents.emit('DeletefromWishList', this.state.wishgood.code);
  };



  amount=(numb)=>{
      if (this.state.amountToOrder<1){
          if(numb===(-1)){
            this.setState({disabledMinus:disabled}, this.announce);
          }
      }
      else if(this.state.amountToOrder<this.state.wishgood.itemAmount){
        if(numb===1){
            this.setState({disabledPlus:disabled}, this.announce);
         }
      }
      else{
        if(numb===(-1)){
            let newOne=this.state.amountToOrder--;
            this.setState({amountToOrder:newOne, disabledMinus:null,}, this.announce);
          }
        else
         if(numb===1){
            let newOne=this.state.amountToOrder++;
            this.setState({amountToOrder:newOne, disabledPlus:null,}, this.announce);
         }
      }

  }


  announce=()=>{
    console.log("Something has changed");
}

  render() {

    
    return (
     <tr className="cartgood">
         <td className="goodImg">
             <img src={this.state.wishgood.itemPhotoURL} alt={this.state.wishgood.itemName}/>
         </td>
         <td className="Cost">
            <p>{this.state.wishgood.itemCost}</p> 
            <p> Осталось: {this.state.wishgood.itemAmount}</p> 
         </td>
         <td>
             <input type="button" onClick={this.amount(-1)} className="Buttons_Plus_Minus" value="-" disabled={this.state.disabledMinus} />
             <span>{this.state.amountToOrder}</span>
             <input type="button" onClick={this.amount(1)} className="Buttons_Plus_Minus" value="+"  disabled={this.state.disabledPlus} />
             <input type="button" onClick={this.deletefromWishList} value="Удалить" />
         </td>
     </tr>
    );

  }

}

export default WishGood;
