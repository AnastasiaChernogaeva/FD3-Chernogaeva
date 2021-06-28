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
  };

   state = {
     goodsLength:this.props.goods.length,
     pageAmounts:this.props.goods.length/6,
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

  };


  render() {
       let categoryList=this.props.categories.slice();
       categoryList=categoryList.map((elem ,i)=>
        <li id={i}  key={i}><button onClick={this.chooseCategory} value={elem}>{elem}</button></li>
      );

      let pageAmounts=ceil(this.state.pageAmounts);
      let pageGoods=[];
      for (let k=1; k<=pageAmounts; k++){
        pageGoods.push(<li className="numbers" onClick={this.changePageGoods} value={k}>{k}</li>);
      }

      let goods=this.props.goods.slice();

      let goodsArr=goods.slice();
      goodsArr=goodsArr.filter((elem,i)=>(i+1)%6==0);
      let firstPageElem=goodsArr.find((obj,ind)=>ind==this.state.pageBefore);
      let lastPageElem=goodsArr.find((obj,ind)=>ind==this.state.openPage);
      
      let firstPageElemIndex=goods.findIndex(firstPageElem);
      let lastPageElemIndex=goods.findIndex(lastPageElem);


      goods=goods.map((elem,ind)=>{
        if(ind>firstPageElemIndex && ind<lastPageElemIndex){
          <Good info={elem} key={elem.code} className='Good'></Good>
        }
      },
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
         <div className="Goods">
             {goods}
             <div className="Navigation">
            <li><span className="material-icons"> arrow_back_ios</span></li>
            {pageGoods}
            <li><span className="material-icons"> arrow_forward_ios</span></li>
         </div>
         </div>
         </div>

     </div>
    );

  }

}

export default BodyShop;
