import React from 'react';
import PropTypes from 'prop-types';

import  './RBF.css';

class RainBowFrame extends React.Component {

  static propTypes = {
    colors:PropTypes.array.isRequired,
  };
  
  render() {
    let rbf=this.props.colors.filter((elem,ind)=>{
      (this.props.colors.length-1)==ind?<div style={{border:`solid 3px ${elem}`,padding:"10px"}}>{this.props.children} </div>:<div style={{border:`solid 3px ${elem}`,padding:"10px"}}>{this.props.children} </div>
  ;})
   
    return (
      {rbf}
    );
  }

}

export default RainBowFrame;

