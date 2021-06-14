import React from 'react';
import PropTypes from 'prop-types';

/*import './mobileClients.css';*/

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
  };

/*  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient info="+this.props.info+" componentWillReceiveProps");
    if(this.state.info!=newProps.info){
      this.setState({info:newProps.info});
    }
    
  };*/

  render() {
       let categoryList=this.props.categories.slice();
       categoryList=categoryList.map((elem ,i)=>
        <li id={i} onClick={this.chooseCategory} key={i}>{elem}</li>
      );

      let goods=this.state.goods.slice();
      goods=goods.map(elem=>
        <Good info={elem} key={elem.code} className='Good'></Good>
      );
    
    return (
     <div>
         <div className="categories">
             <ul>{categoryList}</ul>
         </div>
         <div className="Goods">
             {goods}
         </div>
         <div className="Navigation">

         </div>
     </div>
    );

  }

}

export default BodyShop;
