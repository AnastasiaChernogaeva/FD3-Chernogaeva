import React from 'react';
import PropTypes from 'prop-types';



import Ishop from './ishop3';
import IshopCard from './ishopcard.js';
import EditCard from './editcard.js';

class Shop extends React.Component {


    static propTypes = {
        allItems: PropTypes.array.isRequired,
        shopName: PropTypes.string.isRequired,
      };

    state = {
          selectedItemId:0,
          items: this.props.allItems,
          deletedItemId:0,
          chosen:false,
          editItemId:0;
          editElem:null;
      };



    selectedRow=(code)=>{


        
      if(this.state.selectedItemId!=code){
        this.setState({ chosen:false,},this.highTimeToAct(code));  
      }
      else if(this.state.selectedItemId==code){
        this.setState({selectedItemId:0, chosen:false,},this.answer);
      }
      else{
        this.highTimeToAct();
      }
   


    };

    highTimeToAct=(code)=>{
      this.setState({selectedItemId:code, chosen:true,},this.answer);
      };

    answer=()=>{
      console.log("Ready!!!");
    };




    deleteItem=(id)=>{ 
       let filteredItems=this.state.items.filter(i=> i!=id)
       this.setState({items:filteredItems, deletedItemId:id,});
       };


   editItem=(id)=>{ 
        let filteredItems=this.state.items.forEach(elem, i=> {
          if(i==id){
            this.setState({ editItemId:id, editElem:elem;};
          }
        });
        };


  

    render() {
      var innerItems=this.state.items.map((elem,ind,) => 
      <Ishop
       v={elem} i={ind} key={ind} className='item' 
       cbDelete={this.deleteItem} cbSelected={this.selectedRow}  cbEdit={this.deleteItem}
        chosenRow={this.state.chosen} selectedItem={this.state.selectedItemId}>
          elem
      </Ishop>  
      );

      var card=this.state.items.map((elem,ind,) => ((this.state.selectedItemId==elem.code)?<IshopCard 
        v={elem} i={ind} key={ind} className='Itemscard'  selectedItem={this.state.selectedItemId}>
      </IshopCard>:null));

      var edit=this.state.items.map((elem,ind,) => ((this.state.editItemId==elem.code)?<IshopCard 
        v={elem} i={ind} key={ind} className='EditItem'  editItem={this.state.editItemId}>
      </IshopCard>:null));

      return(
      <div className='SHOP'>

       <h1 className='SHOPNAME'>{this.props.shopName}</h1> 
       
       <div className='ISHOP'>
         <table className='ALLITEMS'>
           <tbody className='tb'>
           {innerItems}
           </tbody>
         </table>       
       </div> 

        {card}

      </div> 
      
       ) 
    };
  
  }

  export default Shop;

