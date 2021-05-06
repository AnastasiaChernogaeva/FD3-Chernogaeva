import React from 'react';
import PropTypes from 'prop-types';

class RainBowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array.isRequired,
    text:PropTypes.string,
  };
  
  render() {
    let code=this.props.colors.filter((elem, ind)=>{(this.props.colors.length-1)==ind?<div style={{border:`solid 3px ${elem}`,padding:"10px"}}>{this.props.text} </div>:<div style={{border:`solid 3px ${elem}`,padding:"10px"}}>{this.props.children} </div>
  });
   
    return ({code});
  }

}

export default RainBowFrame;