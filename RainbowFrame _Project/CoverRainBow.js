import React from 'react';
import PropTypes from 'prop-types';

import RainBowFrame from './RainBowFrame.js';

class CoverRainBow extends React.Component {

    render() {
      let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
      return (
        <RainBowFrame colors={colors}>
          Hello!
        </RainBowFrame>
      );
    }
  
  }
  
  export default CoverRainBow;