import React from 'react';
import PropTypes from 'prop-types';





class EditCard extends React.Component {


  static propTypes = {
        code:PropTypes.number,
        v:PropTypes.object,
        i:PropTypes.number,
        editItem:PropTypes.number,
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

    add=()=>{
        if(this.state.valueName!=0){
            if(this.state.valueAmount!=0){
                if(this.state.valuePrice!=0){
                    if(this.state.valueURL!=0){
                        let newelementHash={"code":this.props.items.length+1, "itemName":this.state.valueName, "itemCost":this.state.valuePrice, "itemPhotoURL":this.state.valueURL, "itemAmount":this.state.valueAmount};

              this.cbnewelement(newelementHash);
            }
        }
        }
    }
};

cancel=()=>{
    this.setState({cancelbool:true,})
}
  


    render () {


        if(this.state.cancelbool==false){
            return(
                <div> 
                    <h2>Edit</h2>
  
                  <label className='id'><b>ID:</b>{this.props.i}</label> <br/>
                  <label htmlFor="Name"><b>Name:</b></label> <input type="text" id="Name" value={this.state.valueName} onChange={this.validatingName}></input> {(this.state.valueName!=0)?null:<span className="error"> Please, fill the field</span>}<br/>
                  <label htmlFor="AmountItems"><b>Quantity:</b></label> <input type="text" id="AmountItems" value={this.state.valueAmount} onChange={this.validatingAmount}></input> {(this.state.valueAmount!=0)?null:<span className="error">Please, fill the field</span>}<br/>
                  <label htmlFor="Price"><b>Price:</b></label> <input type="text" id="Price" value={this.state.valuePrice} onChange={this.validatingPrice}></input> {(this.state.valuePrice!=0)?null:<span className="error">Please, fill the field</span>}<br/>
                  <label htmlFor="URL"><b>URL Photo:</b></label> <input type="text" id="URL" value={this.state.valueURL} onChange={this.validatingURL}></input> {(this.state.valueURL!=0)?null:<span className="error">Please, fill the field</span>}<br/>
  
                <input  type="button" defaultValue="Add"  onClick={this.add}  disabled={this.state.buttonAdd==0?false:true} />
                <input  type="button" defaultValue="Cancel" onClick={this.cancel}/>
            
              </div>
              );
        }
        else if(this.state.cancelbool==true){
            return(<br/>)
        }
        
            
        

        }
        

  
  
  };


  
    export default EditCard;
  
  
    
    
 