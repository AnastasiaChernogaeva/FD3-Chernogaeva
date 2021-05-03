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
        buttonAdd:0,
    };

    validatingName=(EO)=>{
        if (EO.target.value!=null)
             this.setState({valueName:EO.target.value,});
             if( this.state.buttonAdd!=0)
            this.setState({buttonAdd:this.state.buttonAdd--,});
        
        else
            this.setState({buttonAdd:this.state.buttonAdd++,});
        
    }

    validatingAmount=(EO)=>{
        if (EO.target.value!=null)
             this.setState({valueAmount:EO.target.value,});
            if( this.state.buttonAdd!=0)
            this.setState({buttonAdd:this.state.buttonAdd--,});
        
        else
            this.setState({buttonAdd:this.state.buttonAdd++,});
        
    }

    validatingPrice=(EO)=>{
        if (EO.target.value!=null)
             this.setState({valuePrice:EO.target.value,});
             if( this.state.buttonAdd!=0)
            this.setState({buttonAdd:this.state.buttonAdd--,});
        
        else
            this.setState({buttonAdd:this.state.buttonAdd++,});     
        
    }

    validatingURL=(EO)=>{
        if (EO.target.value!=null)
            this.setState({valueURL:EO.target.value,});
            if( this.state.buttonAdd!=0)
            this.setState({buttonAdd:this.state.buttonAdd--,});
       
       else
           this.setState({buttonAdd:this.state.buttonAdd++,});     
       
   
    }

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
  
                  <label className='id'><b>ID:</b>{this.props.i}</label> <br/>
                  <label htmlFor="Name"><b>Name:</b></label> <input type="text" id="Name" value={this.state.valueName} onChange={this.validatingName}></input> {(this.state.valueName!=0)?null:<span className="error"> Please, fill the field</span>}<br/>
                  <label htmlFor="AmountItems"><b>Quantity:</b></label> <input type="text" id="AmountItems" value={this.state.valueAmount} onChange={this.validatingAmount}></input> {(this.state.valueAmount!=0)?null:<span className="error">Please, fill the field</span>}<br/>
                  <label htmlFor="Price"><b>Price:</b></label> <input type="text" id="Price" value={this.state.valuePrice} onChange={this.validatingPrice}></input> {(this.state.valuePrice!=0)?null:<span className="error">Please, fill the field</span>}<br/>
                  <label htmlFor="URL"><b>URL Photo:</b></label> <input type="text" id="URL" value={this.state.valueURL} onChange={this.validatingURL}></input> {(this.state.valueURL!=0)?null:<span className="error">Please, fill the field</span>}<br/>
  
                <input  type="button" defaultValue="Save"  onClick={this.save}  disabled={this.state.buttonAdd==0?false:true} />
                <input  type="button" defaultValue="Cancel" onClick={this.cancel}/>
            
              </div>
              );
        
        
            
        

        }
        

  
  
  };


  
    export default Editcard;
  
  
    
    
 