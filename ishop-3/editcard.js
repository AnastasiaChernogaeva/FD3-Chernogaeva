import React from 'react';
import PropTypes from 'prop-types';





class EditCard extends React.Component {


  static propTypes = {
        code:PropTypes.number,
        v:PropTypes.object,
        i:PropTypes.number,
        editItem:PropTypes.number,
    };


    
  

    render () {
      


          return(
              <div className='Edit'  id={this.props.v.code} key={this.props.v.code}> 
                <div className='itemPhoto'><img  src= {this.props.v.itemPhotoURL}/></div> 
                <div className='itemInfo'> 
                    <h3 className='nameItem'>{this.props.v.itemName}</h3>
                    <p className='amount'>Количество товаров на складе:{this.props.v.itemAmount}</p>
                    <p className='cost'>Цена:<br/>{this.props.v.itemCost}</p>
                </div>
            </div>
            );
    };
  
  };


  
    export default EditCard;
  
