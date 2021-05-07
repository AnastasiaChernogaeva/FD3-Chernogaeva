import React from 'react';
import PropTypes from 'prop-types';

import  'RBF.css';

class RainBowFrame extends React.Component {

  static propTypes = {
    colors:PropTypes.array.isRequired,
    color: PropTypes.string.isRequired,
    text:PropTypes.string,
  };
  
  render() {
    let code=(this.props.colors.length-1)==ind?<div style={{border:`solid 3px ${this.props.color}`,padding:"10px"}}>{this.props.text} </div>:<div style={{border:`solid 3px ${this.props.color}`,padding:"10px"}}>{this.props.children} </div>
  ;
   
    return ({code});
  }

}

export default RainBowFrame;