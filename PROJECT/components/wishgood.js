import React from 'react';
import PropTypes from 'prop-types';

import './wishList.css';
import './media1.css';
import './media2.css';
import './media3.css';
import './cartgood.css';
import './shop.css';


import {pageEvents} from './events';

class WishGood extends React.PureComponent {

  static propTypes = {
    info:PropTypes.object,
  };

  state = {
    wishgood:this.props.info,
    amountToOrder:1,
    disabledMinus:null,
    disabledPlus:null,
    height:'',
  };



  deletefromWishList=()=>{
    pageEvents.emit('DeletefromWishList', this.state.wishgood.code);
  };
  anim=()=>{
    this.setState({height:"0px",}, this.announce);
  }

  


  amountLess=()=>{
    if (this.state.amountToOrder<1){
        this.setState({disabledMinus:"disabled"}, this.announce);
     
  }
  else{
    let newOne=this.state.amountToOrder-1;
    this.setState({amountToOrder:newOne, disabledMinus:null,}, this.announce);
    if(this.state.disabledPlus==="disabled")
    this.setState({disabledPlus:null,}, this.announce);
    if (this.state.amountToOrder===1)
      this.setState({disabledMinus:"disabled"}, this.announce);
  }
  pageEvents.emit("amountToOrder", this.state.amountToOrder, this.props.info.code);
  }

  amountMore=()=>{
      let newOne=this.state.amountToOrder+1;
            this.setState({amountToOrder:newOne, disabledPlus:null,}, this.announce);
            if(this.state.disabledMinus==="disabled")
            this.setState({disabledMinus:null,}, this.announce);
            if(this.state.amountToOrder===(this.state.wishgood.itemAmount-1))
              this.setState({disabledPlus:"disabled"}, this.announce);
              pageEvents.emit("amountToOrder", this.state.amountToOrder, this.props.info.code);
              // }
  }



  announce=()=>{
    console.log("Something has changed");
    if( this.state.height!='' )
    setTimeout(this.deletefromWishList, 1000);
}

  render() {
  
   
   

     if ( this.state.height!='' ){

      return (
        <div className="cartgood" id="deleteItWish" >
        <div className="goodImg">
          <img src={this.state.wishgood.itemPhotoURL} alt={this.state.wishgood.itemName}/>
        </div>
        <div className="Cost">
          <p><b>{this.state.wishgood.itemName}</b></p> 
          <p>{this.state.wishgood.itemCost}</p> 
          <p> ????????????????: {this.state.wishgood.itemAmount}</p>
        </div>
        <div className="bbuttons">
              <input type="button" onClick={this.amountLess} className="Buttons_Plus_Minus" value="-" disabled={this.state.disabledMinus} />
              <span>{this.state.amountToOrder}</span>
              <input type="button" onClick={this.amountMore} className="Buttons_Plus_Minus" value="+"  disabled={this.state.disabledPlus} />
              <input type="button" onClick={this.anim} value="??????????????" />
        </div>
    </div>
        );
    }
    else{
    
      return (
        <div className="cartgood" >
        <div className="goodImg">
          <img src={this.state.wishgood.itemPhotoURL} alt={this.state.wishgood.itemName}/>
        </div>
        <div className="Cost">
          <p><b>{this.state.wishgood.itemName}</b></p> 
          <p>{this.state.wishgood.itemCost}</p> 
          <p> ????????????????: {this.state.wishgood.itemAmount}</p>
        </div>
        <div className="bbuttons">
              <input type="button" onClick={this.amountLess} className="Buttons_Plus_Minus" value="-" disabled={this.state.disabledMinus} />
              <span>{this.state.amountToOrder}</span>
              <input type="button" onClick={this.amountMore} className="Buttons_Plus_Minus" value="+"  disabled={this.state.disabledPlus} />
              <input type="button" onClick={this.anim} value="??????????????" />
        </div>
    </div>
        );
    }

  }

}

export default WishGood;
