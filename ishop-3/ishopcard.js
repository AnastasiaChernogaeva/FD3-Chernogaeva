import React from 'react';
import PropTypes from 'prop-types';

import './ishopcard.css';



class IshopCard extends React.Component {


  static propTypes = {
        code:PropTypes.number,
        v:PropTypes.object,
        i:PropTypes.number,
        selectedItem:PropTypes.number,
    };


    
  

    render () {
      
          var textAmount='Количество товаров на складе: ';
          var textCost='Цена: ';

          if (this.props.selectedItem==this.props.v.code){
            return(
              <div className='card'  id={this.props.v.code} key={this.props.v.code}> 
                <div className='itemPhoto'><img  src= {this.props.v.itemPhotoURL}/></div> 
                <div className='itemInfo'> 
                    <h3 className='nameItem'>{this.props.v.itemName}</h3>
                    <p className='amount'>{textAmount,this.props.v.itemAmount}</p>
                    <p className='cost'>{textCost,this.props.v.itemCost}</p>
                </div>
            </div>
            );
        }
         else{
         return ();
        }

    };
  
  };

  export default IshopCard;
