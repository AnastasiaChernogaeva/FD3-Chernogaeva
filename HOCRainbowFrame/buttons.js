import React from 'react';
import PropTypes from 'prop-types';
import "./b.css";

class DoubleButton extends React.Component {

    static propTypes={
        caption1:PropTypes.string,
        caption2:PropTypes.string,
        cbPressed:PropTypes.func,


    };

    state={
    }

clicked1=()=>{
    this.props.cbPressed(1);
}

clicked2=()=>{
    this.props.cbPressed(2);
}


    render() {
        

        return(
        <div>
        <input type="button" value={this.props.caption1} onClick={this.clicked1}/>
       <p>{this.props.children}</p>
        <input type="button"  value={this.props.caption2}  onClick={this.clicked2}/></div>

        );
            
      
    }
  
  }
  
  export default DoubleButton;