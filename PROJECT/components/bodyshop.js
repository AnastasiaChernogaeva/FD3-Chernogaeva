import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './shop.css';
import './error.css';

import Good from './good.js';

import {pageEvents} from './events';

class BodyShop extends React.PureComponent {

  static propTypes = {
    goods:PropTypes.array,
    bodyChange:PropTypes.number,
    categories:PropTypes.array,
  };

   state = {
     goods:this.props.goods,
     goodsLength:this.props.goods.length,
    //  pageAmounts:this.props.goods.length/6,
     openPage:1,
     pageBefore:0,
     textKK:"",

   };


   componentDidMount = () => {
      pageEvents.addListener("GiveUPageNum", this.setPage);
      pageEvents.addListener("NoSuchItems", this.textToShowAbsecnceOfitem );

      // pageEvents.addListener("GiveUPageCatNum", this.setCatPage);
    };
  
      
    componentWillUnmount = () => {
      pageEvents.removeListener("GiveUPageNum", this.setPage);
      pageEvents.removeListener("NoSuchItems", this.textToShowAbsecnceOfitem );

      // pageEvents.removeListener("GiveUPageCatNum", this.setCatPage);
    };

 UNSAFE_componentWillReceiveProps = (newProps) => {
    if(this.props.goods!=newProps.goods){
      this.setState({goods:newProps.goods});
    }
    
  };

  textToShowAbsecnceOfitem=(text)=>{
  this.setState({textKK:text,}, this.announce);
  }


  setPage=(num)=>{
    this.setState({openPage:num, pageBefore:num-1,textKK:"", }, this.announce);
  }

  // setCatPage=(num, word)=>{
  //   pageEvents.emit('SearchAdd', word);
  //   this.setState({openPage:num, pageBefore:num-1,},this.announce);
  // }

  chooseCategory=(EO)=>{
    pageEvents.emit('Search', EO.target.value, "newCategory");
    this.setState({openPage:1, pageBefore:0, textKK:"",},this.announce);
    pageEvents.emit("FinishSearch", "" );
  }

  changePageGoods=(EO)=>{
   this.setState({openPage: EO.target.value, pageBefore:EO.target.value-1,textKK:"",}, this.announce);
   pageEvents.emit('PageChange', EO.target.value);
  };

  // changePageGoodsWithArrows=(EO)=>{
  //   let pageNum=this.state.openPage+EO.target.value;
  //   this.setState({openPage: pageNum, pageBefore:pageNum-1,}, this.announce);
  //   pageEvents.emit('PageChange', pageNum);
  // }

  changePageGoodsWithArrowsMines=()=>{
    if(this.state.openPage!=1){
      let pageNum=this.state.openPage-1;
      this.setState({openPage: pageNum, pageBefore:pageNum-1,}, this.announce);
      pageEvents.emit('PageChange', pageNum);
    }
  }

  changePageGoodsWithArrowsPlus=()=>{
    if(this.state.openPage!=this.state.goodsLength/6){
    let pageNum=this.state.openPage+1;
    this.setState({openPage: pageNum, pageBefore:pageNum-1,}, this.announce);
    pageEvents.emit('PageChange', pageNum);
    }
  }

  changeBody1=()=>{
    pageEvents.emit('Search', "all", "newCategory");
    this.setState({openPage:1, pageBefore:0, textKK:"",},this.announce);
    pageEvents.emit("FinishSearch", "" );
  }

  announce=()=>{
    console.log("Something has changed");
}

  render() {
    let hh=<div >
       <p className="error">{this.state.textKK}</p>
       <input type="button" className="Back" onClick={this.changeBody1} value="Вернуться" />
      </div>
       let categoryList=this.props.categories.slice();
       categoryList=categoryList.map((elem ,i)=>
        <li id={i}  key={i}><button onClick={this.chooseCategory} value={elem}>{elem}</button></li>
      );

      let pageAmounts=Math.ceil(this.state.goods.length/6);
      let pageGoods=[];
      for (let k=1; k<=pageAmounts; k++){
        pageGoods.push(<li className="numbers" key={k}  onClick={this.changePageGoods} value={k}>{k}</li>);
      }

      let goods=this.state.goods.slice();

      let goodsArr=goods.slice();
      goodsArr=goodsArr.filter((elem,i)=>(i+1)%6==0);
      let firstPageElem=goodsArr.find((obj,ind)=>(ind+1)==this.state.pageBefore);
      let lastPageElem=goodsArr.find((obj,ind)=>(ind+1)==this.state.openPage);
      
      let firstPageElemIndex=goods.findIndex(elem=>elem==firstPageElem);
      let lastPageElemIndex=goods.findIndex(elem=>elem==lastPageElem);

   

      goods=goods.map((elem,ind)=>{
        if(goods.length<6){
          return (<Good info={elem} key={elem.code} className='Good'></Good>);
        };
        if(firstPageElemIndex==-1){
          if(ind<(lastPageElemIndex+1)){
            return (<Good info={elem} key={elem.code} className='Good'></Good>);
          }
        }
        if(firstPageElemIndex!=-1){
        if(ind>firstPageElemIndex && ind<(lastPageElemIndex+1)){
          return (<Good info={elem} key={elem.code} className='Good'></Good>);
        };
      };
        if(lastPageElemIndex==-1){
          if(ind>firstPageElemIndex){
            return (<Good info={elem} key={elem.code} className='Good'></Good>);
          }
        }
      });
    
    
    return (
      <div>
       <div className="MainBlock">

         <div className="categories">
             <ul>
               <li><h3>Категории:</h3></li>
               <li><button onClick={this.chooseCategory} value="all">все товары</button></li>
               {categoryList}</ul>
         </div>
          
          <div className="aboveGoods"> 
              <div className="Goods">
              {this.state.textKK!="" &&hh} 
              { this.state.textKK==""&&goods}
              </div>
              <div className="Navigation">
                 <li onClick={this.changePageGoodsWithArrowsMines} ><span className="material-icons" > arrow_back_ios</span></li>
                    {pageGoods}
                  <li onClick={this.changePageGoodsWithArrowsPlus} ><span className="material-icons"> arrow_forward_ios</span></li>
              </div>
         </div>

         </div>

     </div>
    );

  }

}

export default BodyShop;
