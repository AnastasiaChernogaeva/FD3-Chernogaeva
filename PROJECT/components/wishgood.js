import React from 'react';
import PropTypes from 'prop-types';

import './wishList.css';

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

/*  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient info="+this.props.info+" componentWillReceiveProps");
    if(this.state.info!=newProps.info){
      this.setState({info:newProps.info});
    }
    
  };*/

  deletefromWishList=()=>{
  //    this.setState({elemToDelete:elemToDelete,}, this.announce);
    pageEvents.emit('DeletefromWishList', this.state.wishgood.code);
  };

  // deletefromCart=()=>{
  //   // setTimeout(pageEvents.emit('DeletefromCart', this.state.cartgood.code),1000);
  //   pageEvents.emit('DeletefromCart', this.state.cartgood.code);
  // };


  // animateToDelete=()=>{
  //   var textElem=document.getElementById(`${this.state.wishgood.code}`);
  //   // сначала померяем текущую высоту и явно её установим элементу
  //   var currHeight=textElem.offsetHeight;
  //   console.log(currHeight);
  //   textElem.style.height=currHeight+"px";
  //   // и в следующий Idle запустим анимацию
  //   setTimeout(()=>textElem.style.height="0px", 0);
  //   // let elemAnimated=document.getElementsByClassName("IsGoingToBeDeleted");
  //   // elemAnimated[0].style.height='0px';
  //    setTimeout(pageEvents.emit('DeletefromWishList', this.state.wishgood.code),8000);
  // }
  anim=()=>{
    // let idNum=this.props.num;
    // var textElem=document.getElementById(`${idNum}`);
    // var currHeight=textElem.offsetHeight;
    // console.log(currHeight);
    // textElem.style.height=currHeight+"px";
    // // и в следующий Idle запустим анимацию
    // setTimeout(function() { textElem.style.height="0px"; }, 0);  
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
  }

  amountMore=()=>{
      let newOne=this.state.amountToOrder+1;
            this.setState({amountToOrder:newOne, disabledPlus:null,}, this.announce);
            if(this.state.disabledMinus==="disabled")
            this.setState({disabledMinus:null,}, this.announce);
            if(this.state.amountToOrder===(this.state.wishgood.itemAmount-1))
              this.setState({disabledPlus:"disabled"}, this.announce);
        
    // }
  }



  announce=()=>{
    console.log("Something has changed");
    if( this.state.height!='' )
    setTimeout(this.deletefromWishList, 1000);
}

  render() {
  
   
    // return (
    //   <tr className="IsGoingToBeDeleted"  id={this.state.wishgood.code} >
    //       <td className="goodImg">
    //           <img src={this.state.wishgood.itemPhotoURL} alt={this.state.wishgood.itemName}/>
    //       </td>
    //       <td className="Cost">
    //       <p>{this.state.wishgood.itemName}</p> 
    //          <p>{this.state.wishgood.itemCost}</p> 
    //          <p> Осталось: {this.state.wishgood.itemAmount}</p> 
    //       </td>
    //       <td>
    //           <input type="button" onClick={this.amountLess} className="Buttons_Plus_Minus" value="-" disabled={this.state.disabledMinus} />
    //           <span>{this.state.amountToOrder}</span>
    //           <input type="button" onClick={this.amountMore} className="Buttons_Plus_Minus" value="+"  disabled={this.state.disabledPlus} />
    //           {/* <input type="button" onClick={this.deletefromWishList} value="Удалить" /> */}
    //           <input type="button" onClick={this.animateToDelete} value="Удалить" />
    //       </td>
    //   </tr>
    //  );
   
   

     if ( this.state.height!='' ){

      return (
        <div className=" IsGoingToBeDeleted" id="deleteItWish" >
        <div className="goodImg">
          <img src={this.state.wishgood.itemPhotoURL} alt={this.state.wishgood.itemName}/>
        </div>
        <div className="Cost">
          <p><b>{this.state.wishgood.itemName}</b></p> 
          <p>{this.state.wishgood.itemCost}</p> 
          <p> Осталось: {this.state.wishgood.itemAmount}</p>
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
        <div className=" IsGoingToBeDeleted" >
        <div className="goodImg">
          <img src={this.state.wishgood.itemPhotoURL} alt={this.state.wishgood.itemName}/>
        </div>
        <div className="Cost">
          <p><b>{this.state.wishgood.itemName}</b></p> 
          <p>{this.state.wishgood.itemCost}</p> 
          <p> Осталось: {this.state.wishgood.itemAmount}</p>
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

export default WishGood;
