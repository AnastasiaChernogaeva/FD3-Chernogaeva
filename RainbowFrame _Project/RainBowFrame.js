import React from 'react';
import PropTypes from 'prop-types';

import  './RBF.css';

class RainBowFrame extends React.Component {

  static propTypes = {
    colors:PropTypes.array.isRequired,
  };
  
  render() {
    let code=this.props.children;
    this.props.colors.forEach((color)=>{
      code=<div style={{border:`solid 5px ${color}`,padding:"20px"}}>{code}</div>
   ;})
    return (code);
   
  }

}

export default RainBowFrame;

