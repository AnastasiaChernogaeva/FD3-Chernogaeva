import React from 'react';
import PropTypes from 'prop-types';





class Editcard extends React.Component {


  static propTypes = {
        v:PropTypes.object,
        editItem:PropTypes.number,
        cbeditelement:PropTypes.func.isRequired,
        cbcancelediting:PropTypes.func,
        
    };

   
    
   
    
    state = {
        valueName:this.props.v.itemName,
        valueAmount:this.props.v.itemAmount,
        valuePrice:this.props.v.itemCost,
        valueURL:this.props.v.itemPhotoURL,
        buttonAdd:null,
    };

    validatingName=(EO)=>{
             this.setState({valueName:EO.target.value,},this.check);
        
    }

    validatingAmount=(EO)=>{
             this.setState({valueAmount:EO.target.value, },this.check);

    }

    validatingPrice=(EO)=>{
             this.setState({valuePrice:EO.target.value, },this.check);
   
        
    }

    validatingURL=(EO)=>{
            this.setState({valueURL:EO.target.value, },this.check);
       
   
    }

    check=()=>{
      switch ( "" ) {
        case this.state.valueName:
            return this.setState({buttonAdd:"disabled",},this.props.cbbuttons(this.state.button));
          break;
        case this.state.valueAmount:
            return this.setState({buttonAdd:"disabled",},this.props.cbbuttons(this.state.button));
          break;
        case this.state.valuePrice:
            return this.setState({buttonAdd:"disabled",},this.props.cbbuttons(this.state.button));
          break;
        case this.state.valueURL:
            return this.setState({buttonAdd:"disabled",},this.props.cbbuttons(this.state.button));
          break;
        default:
            return this.setState({buttonAdd:null,},this.props.cbbuttons(this.state.button));
      }
  
       
};

save=()=>{
    if(this.state.valueName!=0){
        if(this.state.valueAmount!=0){
            if(this.state.valuePrice!=0){
                if(this.state.valueURL!=0){
         let elementHash={ code:this.props.v.code, itemName:this.state.valueName, itemCost:this.state.valuePrice,  itemAmount:this.state.valueAmount, itemPhotoURL:this.state.valueURL};

          this.props.cbeditelement(elementHash);
        }
    }
    }
}     
   
};

cancel=()=>{
    this.props.cbcancelediting();
}
  


    render () {


            return(
                <div> 
                    <h2>Edit</h2>
  
                  <label className='id'><b>ID:</b></label><span>{this.props.v.code}</span> <br/>
                  <label htmlFor="Name"><b>Name:</b></label> <input type="text" id="Name" defaultValue={this.state.valueName} onBlur={this.validatingName}></input> {(this.state.valueName!=0)?null:<span className="error"> Please, fill the field</span>}<br/>
                  <label htmlFor="AmountItems"><b>Quantity:</b></label> <input type="text" id="AmountItems" defaultValue={this.state.valueAmount} onBlur={this.validatingAmount}></input> {(this.state.valueAmount!=0)?null:<span className="error">Please, fill the field</span>}<br/>
                  <label htmlFor="Price"><b>Price:</b></label> <input type="text" id="Price" defaultValue={this.state.valuePrice} onBlur={this.validatingPrice}></input> {(this.state.valuePrice!=0)?null:<span className="error">Please, fill the field</span>}<br/>
                  <label htmlFor="URL"><b>URL Photo:</b></label> <input type="text" id="URL" defaultValue={this.state.valueURL} onBlur={this.validatingURL}></input> {(this.state.valueURL!=0)?null:<span className="error">Please, fill the field</span>}<br/>
  
                <input  type="button" defaultValue="Save"  onClick={this.save}  disabled={this.state.buttonAdd?"disabled":null}  />
                <input  type="button" defaultValue="Cancel" onClick={this.cancel}/>
            
              </div>
              );
        
        
            
        

        }
        

  
  
  };


  
    export default Editcard;
  
  
    
    
 