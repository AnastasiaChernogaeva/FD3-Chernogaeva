import React from 'react';
import PropTypes from 'prop-types';


import "./newone.css";




class Newproduct extends React.Component {


  static propTypes = {
        items:PropTypes.array,
        cbnewelement:PropTypes.func,
        cbcancel:PropTypes.func,
        cbbuttons:PropTypes.func,
        cbeditstate:PropTypes.func,

    };

    state = {
        valueName:"",
        valueAmount:"",
        valuePrice:"",
        valueURL:"",
        buttonAdd:null,
        editstate:null,
    };

    validatingName=(EO)=>{
      this.setState({ editstate:"disabled", },this.send);
      this.setState({valueName:EO.target.value, },this.check);
        
    }

    validatingAmount=(EO)=>{
      this.setState({ editstate:"disabled", },this.send);
             this.setState({valueAmount:EO.target.value,  },this.check);

    }

    validatingPrice=(EO)=>{
      this.setState({ editstate:"disabled", },this.send);
             this.setState({valuePrice:EO.target.value,},this.check);
   
        
    }

    validatingURL=(EO)=>{
      this.setState({ editstate:"disabled", },this.send);
            this.setState({valueURL:EO.target.value, },this.check);
       
   
    }

    send=()=>{
      this.props.cbeditstate(this.state.editstate);
    }
check=()=>{
        

    switch ( "" ) {
        case this.state.valueName:
            return this.setState({buttonAdd:"disabled",},this.props.cbbuttons(this.state.buttonAdd));
          break;
        case this.state.valueAmount:
            return this.setState({buttonAdd:"disabled",},this.props.cbbuttons(this.state.buttonAdd));
          break;
        case this.state.valuePrice:
            return this.setState({buttonAdd:"disabled",},this.props.cbbuttons(this.state.buttonAdd));
          break;
        case this.state.valueURL:
            return this.setState({buttonAdd:"disabled",},this.props.cbbuttons(this.state.buttonAdd));
          break;
        default:
            return this.setState({buttonAdd:null,},this.props.cbbuttons());
      }

   
};

    add=()=>{
        if(this.state.valueName!=0){
            if(this.state.valueAmount!=0){
                if(this.state.valuePrice!=0){
                    if(this.state.valueURL!=0){
                        let newelementHash={"code":this.props.items.length+1, "itemName":this.state.valueName, "itemCost":this.state.valuePrice, "itemPhotoURL":this.state.valueURL, "itemAmount":this.state.valueAmount};

                        this.props.cbeditstate();
              this.props.cbnewelement(newelementHash);
                    }}}}
            
};

cancel=()=>{
  this.props.cbeditstate();
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
  
                <input  type="button" defaultValue="Add"  onClick={this.add}  disabled={this.state.buttonAdd?"disabled":null} />
                <input  type="button" defaultValue="Cancel" onClick={this.cancel}/>
            
              </div>
              );
       
       
        
            
        

        }
        

  
  
  };

  export default Newproduct;