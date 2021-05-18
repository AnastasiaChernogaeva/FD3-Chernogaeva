import React from 'react';
import PropTypes from 'prop-types';



import Ishop from './ishop3.js';

import IshopCard from './ishopcard.js';

import Newproduct from './newone.js';

import Editcard from './edit.js';


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
          newelement:false,
          bButtons:"",
          bedit:"",

          cardMode:0,/**1-view,2-edit, 3-new product */
      };


    /* выделение элемента и получение информации об элементе */
       selectedRow=(code, a)=>{ 
         if(a==2){
          this.setState({chosen:false,  editItemId:code, cardMode:2, });
         }
         else if(a==1){
          if(this.state.selectedItemId!=code){
            this.setState({chosen:false,},this.highTimeToAct(code));  
            
          }
          else if(this.state.selectedItemId==code){
            this.setState({selectedItemId:0, chosen:false, cardMode:0,},this.answer);
          }
         }
     
            };
    
  highTimeToAct=(code)=>{
                this.setState({selectedItemId:code, chosen:true, cardMode:1,},this.answer);
                };
  answer=()=>{console.log("Ready!!!");};

      /*if(this.state.selectedItemId!=code){
        this.setState({chosen:false,},this.highTimeToAct(code));  
        
      }
      else if(this.state.selectedItemId==code){
        this.setState({selectedItemId:0, chosen:false, cardMode:0,},this.answer);
      }
      else{
        this.highTimeToAct();
      }
    };

  

    highTimeToAct=(code)=>{
      this.setState({selectedItemId:code, chosen:true, cardMode:1,},this.answer);
      };

    answer=()=>{
      if(this.state.selectedItemId!=0){
      if(this.state.selectedItemId==this.state.editItemId){
        this.setState({ chosen:false, selectedItemId:0, cardMode:2,});  
      }
      else{
        console.log("Ready!!!");
      }
    }
    else{
      this.setState({ chosen:false, selectedItemId:0, cardMode:0, editItemId:0,})
    }
    };*/



  /* удаление элемента */
    deleteItem=(id)=>{ 
      let filteredItems=this.state.items.filter(i=> i!=id)
      this.setState({items:filteredItems, deletedItemId:id,},);      
      if(id.code==this.state.editItemId){
        this.setState({items:filteredItems, deletedItemId:id, cardMode:0, editItemId:0,},);
        }
         
        else{
        this.setState({items:filteredItems, deletedItemId:id,},);
        }
       
       };




    /* создание нового элемента */
    newElement=(hh)=>{
      this.state.items.push(hh);
      this.setState({newelement:false, cardMode:0,});
    };

   newState=()=>{
    this.setState({ selectedItemId:0, editItemId:0,  newelement:true,  cardMode:3,})
   };

   closeNewProduct=()=>{
    this.setState({newelement:false,  cardMode:0,});
   };





    /* редактирование элемента */
    /*editItem=(id)=>{ 
      if(this.state.editItemId!=id)
            this.setState({  editItemId:id, cardMode:2, });
            

    };*/

    closeEditProduct=()=>{
      this.setState({editItemId:0,  cardMode:0,},this.announce);
     };

     saveEditElement=(newI)=>{
      let items=this.state.items.map(elem=> (elem.code==newI.code)?newI:elem);
      this.setState({items:items, editItemId:0,  cardMode:0, });
     }
    

    announce=()=>{
  console.log("close editcard")
};

changebButtons=(mean)=>{
  this.setState({bButtons:mean, });
}

editChange=(mean)=>{
  this.setState({bedit:mean, });
}

  

    render() {

      var innerItems=this.state.items.map((elem,ind,) => 
      <Ishop
       v={elem} i={ind} key={ind} className='item' bedit={this.state.bedit} 
       cbDelete={this.deleteItem} cbSelected={this.selectedRow} /* cbEdit={this.editItem}  */
        chosenRow={this.state.chosen} selectedItem={this.state.selectedItemId}>
          elem
      </Ishop>  
      );
       
      var card=this.state.items.map((elem,ind,) => ((this.state.selectedItemId==elem.code)?<IshopCard 
        v={elem} i={ind} key={ind} className='Itemscard'  selectedItem={this.state.selectedItemId}>
      </IshopCard>:null));



      let item=this.state.items.find((elem, ) => (this.state.editItemId==elem.code));

      var edit=<Editcard 
        v={item} className='EditItem' cbbuttons={this.changebButtons} cbeditstate={this.editChange}  cbcancelediting={this.closeEditProduct} cbeditelement={this.saveEditElement}>
      </Editcard>;
      


     var codeNewItem=<Newproduct items={this.state.items} cbeditstate={this.editChange} cbbuttons={this.changebButtons} cbnewelement={this.newElement} cbcancel={this.closeNewProduct} ></Newproduct>;
      
  

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

        {this.state.cardMode==1 && card}
        
        {this.state.cardMode==2 &&edit}
        {this.state.cardMode==3 && codeNewItem}

      </div> 
      
       ) 
    };

  };
  
  

  export default Shop;

