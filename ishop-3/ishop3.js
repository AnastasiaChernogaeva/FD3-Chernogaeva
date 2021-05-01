import React from 'react';
import PropTypes from 'prop-types';

import './ishop3.css';




class Ishop extends React.Component {


  static propTypes = {
        cbSelected: PropTypes.func,
        code:PropTypes.number,
        cbDelete:PropTypes.func,
        v:PropTypes.object,
        i:PropTypes.number,
        chosenRow:PropTypes.bool,
        selectedItem:PropTypes.number,
    };


    
  
    funDelete=()=>{
     this.props.cbDelete(this.props.v)
    };
    
    funEdit=()=>{
      this.props.cbEdit(this.props.v)
     };

    select=(EO)=>{
     var code=this.props.v.code;
     this.props.cbSelected(code);   
    };

    render () {
      

          if (this.props.selectedItem==this.props.v.code){
            return(
              <tr className='tableRow chosen'  id={this.props.v.code} key={this.props.v.code} onClick={this.select}> 
                <td className='itemPhoto'><img  src= {this.props.v.itemPhotoURL}/></td> 
                <td className='itemInfo'> 
                    <h3 className='nameItem'>{this.props.v.itemName}</h3>
                    <p className='amount'>Количество товаров на складе:{this.props.v.itemAmount}</p>
                    <p className='cost'>Цена:<br/> {this.props.v.itemCost}</p>
                </td>
          <td className='buttons'>
              <input  type="button" defaultValue="edit" onClick={this.funEdit}/>
              <input  type="button" defaultValue="delete" onClick={this.funDelete}/>
          </td>
            </tr>
            );
        }
         else{
         return (
          <tr className='tableRow  not-chosen'  id={this.props.v.code} key={this.props.v.code} onClick={this.select}> 
            <td className='itemPhoto'><img  src= {this.props.v.itemPhotoURL}/></td> 
            <td className='itemInfo'> 
                <h3 className='nameItem'>{this.props.v.itemName}</h3>
                <p className='amount'>Количество товаров на складе:{this.props.v.itemAmount}</p>
                <p className='cost'>Цена:<br/>{this.props.v.itemCost}</p>
            </td>
            <td className='buttons'>
              <input  type="button" defaultValue="edit" onClick={this.funEdit}/>
              <input  type="button" defaultValue="delete" onClick={this.funDelete}/>
          </td>
        </tr>
        );

         }

    };
  
  };

  export default Ishop;
