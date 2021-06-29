import React from 'react';
import PropTypes from 'prop-types';

import './cartgood.css';

import {pageEvents} from './events';

class CartGood extends React.PureComponent {

  static propTypes = {
    info:PropTypes.object,
    num:PropTypes.number,
  };

  state = {
    cartgood:this.props.info,
    amountToOrder:1,
    disabledMinus:null,
    disabledPlus:null,
    height:'',
  };

/*  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient info="+this.props.info+" componentWillReceiveProps");
    if(this.state.info!=newProps.info){
      this.setState({info:newProps.info});
    }
    
  };*/

  deletefromCart=()=>{
    setTimeout(pageEvents.emit('DeletefromCart', this.state.cartgood.code),5000);
  };

  // emission=()=>{
  //   pageEvents.emit('DeletefromCart', this.state.cartgood.code
  // }

  anim=()=>{
    // let idNum=this.props.num;
    // var textElem=document.getElementById(`${idNum}`);
    // var currHeight=textElem.offsetHeight;
    // console.log(currHeight);
    // textElem.style.height=currHeight+"px";
    // // и в следующий Idle запустим анимацию
    // setTimeout(function() { textElem.style.height="0px"; }, 0);  
    this.setState({height:"0px",}, this.deletefromCart)
  }


  
//   amount=(numb)=>{
//     if (this.state.amountToOrder<1){
//         if(numb===(-1)){
//           this.setState({disabledMinus:disabled}, this.announce);
//         }
//     }
//     else if(this.state.amountToOrder<this.state.cartgood.itemAmount){
//       if(numb===1){
//           this.setState({disabledPlus:disabled}, this.announce);
//        }
//     }
//     else{
//       if(numb===(-1)){
//           let newOne=this.state.amountToOrder--;
//           this.setState({amountToOrder:newOne, disabledMinus:null,}, this.announce);
//         }
//       else
//        if(numb===1){
//           let newOne=this.state.amountToOrder++;
//           this.setState({amountToOrder:newOne, disabledPlus:null,}, this.announce);
//        }
//     }

// }

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
}

amountMore=()=>{
  // if(this.state.amountToOrder===(this.state.cartgood.itemAmount*1)){
  //       this.setState({disabledPlus:"disabled"}, this.announce);
  // }
  // else{
    let newOne=this.state.amountToOrder+1;
          this.setState({amountToOrder:newOne, disabledPlus:null,}, this.announce);
          if(this.state.disabledMinus==="disabled")
          this.setState({disabledMinus:null,}, this.announce);
          if(this.state.amountToOrder===(this.state.cartgood.itemAmount-1))
            this.setState({disabledPlus:"disabled"}, this.announce);
      
  // }
}


announce=()=>{
  console.log("Something has changed");
}

  render() {
   
    if ( this.state.height!='' ){

      return (
        <div className="deleteIt cartgood" id={this.props.num} >
        <div className="goodImg">
            <img src={this.state.cartgood.itemPhotoURL} alt={this.state.cartgood.itemName}/>
        </div>
        <div className="Cost">
        <p><b>{this.state.cartgood.itemName}</b></p> 
           <p>{this.state.cartgood.itemCost}</p> 
           <p> Осталось: {this.state.cartgood.itemAmount}</p> 
        </div>
        <div className="bbuttons">
        <input type="button" onClick={this.amountLess} className="Buttons_Plus_Minus" value="-" disabled={this.state.disabledMinus} />
            <span>{this.state.amountToOrder}</span>
            <input type="button" onClick={this.amountMore} className="Buttons_Plus_Minus" value="+"  disabled={this.state.disabledPlus} />
            <input type="button" onClick={this.anim} value="Удалить" />
        </div>
    </div>
        );
    }
    else{
    
    return (
    //  <tr className="cartgood" id={this.props.num}>
    //      <td className="goodImg">
    //          <img src={this.state.cartgood.itemPhotoURL} alt={this.state.cartgood.itemName}/>
    //      </td>
    //      <td className="Cost">
    //         <p>{this.state.cartgood.itemCost}</p> 
    //         <p> Осталось: {this.state.cartgood.itemAmount}</p> 
    //      </td>
    //      <td>
    //      <input type="button" onClick={this.amountLess} className="Buttons_Plus_Minus" value="-" disabled={this.state.disabledMinus} />
    //          <span>{this.state.amountToOrder}</span>
    //          <input type="button" onClick={this.amountMore} className="Buttons_Plus_Minus" value="+"  disabled={this.state.disabledPlus} />
    //          <input type="button" onClick={this.deletefromCart} value="Удалить" />
    //      </td>
    //  </tr>
    <div className="cartgood" id={this.props.num} >
    <div className="goodImg">
        <img src={this.state.cartgood.itemPhotoURL} alt={this.state.cartgood.itemName}/>
    </div>
    <div className="Cost">
    <p><b>{this.state.cartgood.itemName}</b></p> 
       <p>{this.state.cartgood.itemCost}</p> 
       <p> Осталось: {this.state.cartgood.itemAmount}</p> 
    </div>
    <div className="bbuttons">
    <input type="button" onClick={this.amountLess} className="Buttons_Plus_Minus" value="-" disabled={this.state.disabledMinus} />
        <span>{this.state.amountToOrder}</span>
        <input type="button" onClick={this.amountMore} className="Buttons_Plus_Minus" value="+"  disabled={this.state.disabledPlus} />
        <input type="button" onClick={this.anim} value="Удалить" />
    </div>
</div>
    );
    }
  }

}

export default CartGood;
