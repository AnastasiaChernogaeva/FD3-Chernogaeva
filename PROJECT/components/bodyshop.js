import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './shop.css';

import Good from './good.js';

import {pageEvents} from './events';

class BodyShop extends React.PureComponent {

  static propTypes = {
    goods:PropTypes.array,
    bodyChange:PropTypes.number,
    categories:PropTypes.array,
    textKK:PropTypes.string,
  };

   state = {
     goodsLength:this.props.goods.length,
    //  pageAmounts:this.props.goods.length/6,
     openPage:1,
     pageBefore:0,


   };



/*  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient info="+this.props.info+" componentWillReceiveProps");
    if(this.state.info!=newProps.info){
      this.setState({info:newProps.info});
    }
    
  };*/
  chooseCategory=(EO)=>{
    pageEvents.emit('Search', EO.target.value);
  }

  changePageGoods=(EO)=>{
   this.setState({openPage: EO.target.value, pageBefore:EO.target.value-1,}, this.announce);
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

  render() {
    let hh=this.props.textKK;
       let categoryList=this.props.categories.slice();
       categoryList=categoryList.map((elem ,i)=>
        <li id={i}  key={i}><button onClick={this.chooseCategory} value={elem}>{elem}</button></li>
      );

      let pageAmounts=Math.ceil(this.props.goods.length/6);
      let pageGoods=[];
      for (let k=1; k<=pageAmounts; k++){
        pageGoods.push(<li className="numbers" key={k} onClick={this.changePageGoods} value={k}>{k}</li>);
      }

      let goods=this.props.goods.slice();

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
        if(ind>firstPageElemIndex && ind<(lastPageElemIndex+1)){
          return (<Good info={elem} key={elem.code} className='Good'></Good>);
        };
      });
          // let pageAmounts=goods.length/10;
    
      // let goodsArr=goods.slice();
      // goodsArr=goodsArr.filter((elem,i)=>(i+1)%3==0);
    
      // goods=goods.map((elem,)=>{
      //   //   let highTimeToGoToAnotherRow=goodsArr.find(obj=>obj===elem);
      //   // if(highTimeToGoToAnotherRow!=undefined){
      //   //  return( <Fragment>
      //   //  <Good info={elem} key={elem.code} className=' BreakRow'></Good>
      //   //  </Fragment>);
      //   // }
      //   // else
    
      //   // return (<Good info={elem} key={elem.code} className='Good'></Good>);
      // }
    
      // );
      // goods=goods.map((elem, ind)=>
      //   ind<6?<Good info={elem} key={elem.code} className='Good'></Good>:null
      //   );
    
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
              {goods}
              {hh!=undefined?hh:null}
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
