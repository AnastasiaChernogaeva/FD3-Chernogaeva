import React from 'react';
import PropTypes from 'prop-types';


import DoubleButton from './buttons';
import { withFrame } from './withFrame';


let colors=['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
let Framed=withFrame(colors);
let FramedDB=Framed(DoubleButton);

class CoverRB extends React.Component {
    static propTypes={
        captio1:PropTypes.string,
        captio2:PropTypes.string,
        cbPressed:PropTypes.func,

    }

    render() {
        
      return(
        <FramedDB caption1={this.props.caption1} caption2={this.props.caption2}  cbPressed={ this.props.cbPressed }>или</FramedDB>
      );
    }
  
  }
  
  export default CoverRB;