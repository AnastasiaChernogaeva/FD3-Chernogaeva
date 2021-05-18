import React from 'react';
import PropTypes from 'prop-types';


import DoubleButton from './buttons';
import { withFrame } from './withFrame';




class CoverRB extends React.Component {
    static propTypes={
        caption1:PropTypes.string,
        caption2:PropTypes.string,
        cbPressed:PropTypes.func,

    }

    render() {
      let colors=['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
      let Framed=withFrame(colors)(DoubleButton);
      return(
        <div><Framed caption1={this.props.caption1} caption2={this.props.caption2}  cbPressed={ this.props.cbPressed }>или</Framed></div>
      );
    }
  
  }
  
  export default CoverRB;