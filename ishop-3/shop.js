import React from 'react';
import PropTypes from 'prop-types';



import Ishop from './ishop3.js';

import IshopCard from './ishopcard.js';

import Newproduct from './newone.js';

import Elementeditnow from './edit.js';


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
          editItemId:0,
          editItemElem:0,
          newelement:false,
      };


    /* выделение элемента и получение информации об элементе */
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



  /* удаление элемента */
    deleteItem=(id)=>{ 
       let filteredItems=this.state.items.filter(i=> i!=id)
       this.setState({items:filteredItems, deletedItemId:id,});
       };





    /* создание нового элемента */
    newElement=(hh)=>{
      this.state.items.push(hh);
      this.setState({newelement:false,});
    };

   newState=()=>{
    this.setState({ newelement:true,})
   };

   closeNewProduct=()=>{
    this.setState({newelement:false,});
   };





    /* редактирование элемента */
    editItem=(id)=>{ 
      let element=this.state.items.filter(i=> i==id);

            this.setState({ editItemId:id, editItemElem:element[0], });
    };

    editElement=(inf)=>{
      this.state.items.split(this.state.editItemElem).join(inf);
      this.setState({editItemId:0, editItemElem:0,});

    }




  

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
        v={elem} i={ind} key={ind} className='EditItem'  editItem={this.state.editItemId} cbEdit={this.editElement} cbcancel={this.closeNewProduct}>
      </IshopCard>:null));


     var codeNewItem=<Newproduct items={this.state.items} cbnewelement={this.newElement} cbcancel={this.closeNewProduct} ></Newproduct>;
      
  

      return(
      <div className='SHOP'>

       <h1 className='SHOPNAME'>{this.props.shopName}</h1> 
       
       <div className='ISHOP'>
         <table className='ALLITEMS'>
           <tbody className='tb'>
           {innerItems}
           </tbody>
         </table>  
         <input  type="button" defaultValue="new product" onClick={this.newState} />   
       </div> 

        {card}
        {(this.state.editItemId!=0)?edit:null}
        {(this.state.newelement==true)?codeNewItem:null}

      </div> 
      
       ) 
    };

  };
  
  

  export default Shop;

