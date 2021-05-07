import React from 'react';
import ReactDOM from 'react-dom';

import RainBowFrame from './RainBowFrame.js';

class Cover extends React.Component {

    static propTypes = {
      colors: PropTypes.array.isRequired,
      text:PropTypes.string,
    };
    
    render() {
      let code=this.props.colors.map((elem, ind)=><RainBowFrame color={elem} id={ind}></RainBowFrame>
    );
     
      return ({code});
    }
  
  }
  
  export default Cover;