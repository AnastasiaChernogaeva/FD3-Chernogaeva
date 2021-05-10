import React from 'react';
import PropTypes from 'prop-types';


import "./newone.css";




class Newproduct extends React.Component {


  static propTypes = {
        items:PropTypes.array,
        cbnewelement:PropTypes.func,
        cbcancel:PropTypes.func,

    };

    state = {
        valueName:0,
        valueAmount:0,
        valuePrice:0,
        valueURL:0,
        buttonAdd:-4,
    };

    validatingName=(EO)=>{
        if (EO.target.value!=null)
             this.setState({valueName:EO.target.value,buttonAdd:this.state.buttonAdd+1,});
        
    }

    validatingAmount=(EO)=>{
        if (EO.target.value!=null)
             this.setState({valueAmount:EO.target.value, buttonAdd:this.state.buttonAdd+1,});
        
    }

    validatingPrice=(EO)=>{
        if (EO.target.value!=null)
             this.setState({valuePrice:EO.target.value, buttonAdd:this.state.buttonAdd+1,});   
        
    }

    validatingURL=(EO)=>{
        if (EO.target.value!=null)
            this.setState({valueURL:EO.target.value,buttonAdd:this.state.buttonAdd+1,});   
       
   
    }

    add=()=>{
                        let newelementHash={"code":this.props.items.length+1, "itemName":this.state.valueName, "itemCost":this.state.valuePrice, "itemPhotoURL":this.state.valueURL, "itemAmount":this.state.valueAmount};

              this.props.cbnewelement(newelementHash);
            
};

cancel=()=>{
    this.props.cbcancel();
}
  


    render () {


            return(
                <div> 
                    <h2>New product</h2>
  
                  <label className='id'><b>ID:</b>{this.props.items.length+1}</label> <br/>
                  <label htmlFor="Name"><b>Name:</b></label> <input type="text" id="Name" onChange={this.validatingName}></input> {(this.state.valueName!=0)?null:<span className="error"> Please, fill the field</span>}<br/>
                  <label htmlFor="AmountItems"><b>Quantity:</b></label> <input type="text" id="AmountItems" onChange={this.validatingAmount}></input> {(this.state.valueAmount!=0)?null:<span className="error">Please, fill the field</span>}<br/>
                  <label htmlFor="Price"><b>Price:</b></label> <input type="text" id="Price" onChange={this.validatingPrice}></input> {(this.state.valuePrice!=0)?null:<span className="error">Please, fill the field</span>}<br/>
                  <label htmlFor="URL"><b>URL Photo:</b></label> <input type="text" id="URL" onChange={this.validatingURL}></input> {(this.state.valueURL!=0)?null:<span className="error">Please, fill the field</span>}<br/>
  
                <input  type="button" defaultValue="Add"  onClick={this.add}  disabled={this.state.buttonAdd<0?"disabled":null} />
                <input  type="button" defaultValue="Cancel" onClick={this.cancel}/>
            
              </div>
              );
       
       
        
            
        

        }
        

  
  
  };

  export default Newproduct;