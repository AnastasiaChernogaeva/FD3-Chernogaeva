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

  // state = {
  //   goods:this.props.goods,
  // };

/*  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient info="+this.props.info+" componentWillReceiveProps");
    if(this.state.info!=newProps.info){
      this.setState({info:newProps.info});
    }
    
  };*/
  chooseCategory=(EO)=>{
    pageEvents.emit('Search', EO.target.value);
  }


  render() {
       let categoryList=this.props.categories.slice();
       categoryList=categoryList.map((elem ,i)=>
        <li id={i}  key={i}><button onClick={this.chooseCategory} value={elem}>{elem}</button></li>
      );

      let goods=this.props.goods.slice();
      let goodsArr=goods.slice();
      goodsArr=goodsArr.filter((elem,i)=>(i+1)%3==0);
      goods=goods.map((elem,l,)=>{
          let highTimeToGoToAnotherRow=goodsArr.find(goods[l]);
        if(highTimeToGoToAnotherRow!=undefined){
          <Fragment>
         <Good info={elem} key={elem.code} className='Good'></Good><br/><br/>
         </Fragment>
        }
        else
        <Good info={elem} key={elem.code} className='Good'></Good>
        
      }
      //   for(let l=0;l<goods.length; l++){
      //     let highTimeToGoToAnotherRow=goodsArr.find(goods[l]);
      //   if(highTimeToGoToAnotherRow!=undefined){
      //     <Fragment>
      //    <Good info={elem} key={elem.code} className='Good'></Good><br/><br/>
      //    </Fragment>
      //   }
      //   else
      //   <Good info={elem} key={elem.code} className='Good'></Good>
      //   }
      // }
    
      );
    
    return (
     <div>
       <div className="MainBlock">
         <div className="categories">
             <ul>
               <li><h3>Категории:</h3></li>
               {categoryList}</ul>
         </div>
         <div className="Goods">
             {goods}
         </div>
         </div>
         <div className="Navigation">

         </div>
     </div>
    );

  }

}

export default BodyShop;
