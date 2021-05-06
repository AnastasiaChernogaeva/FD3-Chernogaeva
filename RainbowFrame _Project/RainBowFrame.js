import React from 'react';
import PropTypes from 'prop-types';

class ColorFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array.isRequired,
  };
  
  render() {
    return (
    this.props.colors.forEach((elem, ind)=>{(this.props.colors.length-1)==ind?<div style={{border:"solid 3px "+elem,padding:"10px"}}>{this.props.children} </div>:<div style={{border:"solid 3px "+elem,padding:"10px"}}>{this.props.children} </div>
    })
    )
  }

}

export default ColorFrame;