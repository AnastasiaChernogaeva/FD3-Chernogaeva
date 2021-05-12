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
let myy=this.state.text.split(/<br *\/?>/);
        let parts=[];
        myy.forEach((word, ind)=>{
            if(ind)
            parts.push(<br/>);
            parts.push(word);
        }   )
        

        return(
          /*  <div>{this.state.text.split(/<br ?\/?>/).map(elem=> <div>{elem}</div> ) }</div>*/
            parts
        );
            
      
    }
  
  }
  
  export default Br2jsx;