import React from 'react';
import PropTypes from 'prop-types';

/*import './mobileClients.css';*/

import BodyShop from './bodyshop.js';

import {pageEvents} from './events';

class MainBody extends React.PureComponent {

  static propTypes = {
    goods:PropTypes.array,
    categories:PropTypes.array,
    bodyChange:PropTypes.number,
    card:PropTypes.array,
    wishList:PropTypes.array,
  };

/*  state = {
    goods:this.props.goods,
  };

  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient info="+this.props.info+" componentWillReceiveProps");
    if(this.state.info!=newProps.info){
      this.setState({info:newProps.info});
    }
    
  };*/

  render() {
    let shop=<BodyShop goods={this.props.goods} categories={this.props.categories}/>
    let cardPage=<CardPage card={this.props.card} />
    let wishListPage=<WishListPage wish={this.props.wishList} />
    let registration=<Registration/>
    let login=<Login />

    return (
     <div>
         {this.props.bodyChange===1&&shop}
         {this.props.bodyChange===2&&cardPage}
         {this.props.bodyChange===3&&wishListPage}
         {this.props.bodyChange===4&&registration}
         {this.props.bodyChange===5&&login}
     </div>
    );

  }

}

export default MainBody;
