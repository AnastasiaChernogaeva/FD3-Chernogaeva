import React from 'react';
import PropTypes from 'prop-types';
import "./b.css";

class Br2jsx extends React.Component {

    static propTypes={
        text:PropTypes.string,
    };

    state={
        text:this.props.text,
    }


    render() {

        return(
            <div>{this.state.text.split(/<br ?\/?>/).join(" <br> ")}</div>
        );
            
      
    }
  
  }
  
  export default Br2jsx;