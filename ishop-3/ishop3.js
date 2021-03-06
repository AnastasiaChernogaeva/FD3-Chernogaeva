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
        cbEdit:PropTypes.func,
        bedit:PropTypes.string,
        rem:PropTypes.number,
    };



    
  
    funDelete=()=>{
     this.props.cbDelete(this.props.v)
    };
    
    funEdit=(EO)=>{
      EO=EO||window.event;
      console.log ('нажали на кнопку edit');
      this.props.cbEdit(this.props.v.code);

     EO.stopPropagation();
   
     };

    select=(EO)=>{
      EO=EO||window.event;
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
              <input  type="button" defaultValue="edit" onClick={this.funEdit} disabled={this.props.bedit?"disabled":null}/>
              <input  type="button" defaultValue="delete" onClick={this.funDelete}  disabled={this.props.bedit?"disabled":null}/>
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
              <input  type="button" defaultValue="edit" onClick={this.funEdit}  disabled={this.props.bedit?"disabled":null}/>
              <input  type="button" defaultValue="delete" onClick={this.funDelete}  disabled={this.props.bedit?"disabled":null}/>
          </td>
        </tr>
        );

         }

    };
  
  };

  export default Ishop;
