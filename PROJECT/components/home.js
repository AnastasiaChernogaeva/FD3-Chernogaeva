import React from 'react';
import PropTypes from 'prop-types';


import Top from './top.js';
import MainBody from './bodymain.js';
import Footer from './footer.js';


import {pageEvents} from './events';



class Home extends React.PureComponent {


    static propTypes = {
        goods: PropTypes.array.isRequired,
        shopName: PropTypes.string.isRequired,
      };

      state = {
          goods:this.props.goods,
          toShowBodyMode:1, /** 1-Главная страница, 2 - Корзина, 3 - WishList, 4 - Страница регистрации, 5 - Страница входа */
          card:null,
          wishList:null,
        };

  componentDidMount = () => {
    pageEvents.addListener('ChangeBody',this.changeBody);
    pageEvents.addListener('Search',this.search);
    pageEvents.addListener('AddToCard',this.addToCard);
    pageEvents.addListener('AddToWishList',this.addToWishList);
    };

    
  componentWillUnmount = () => {
    pageEvents.removeListener('ChangeBody',this.changeBody);
    pageEvents.removeListener('Search',this.search);
    pageEvents.removeListener('AddToCard',this.addToCard);
    pageEvents.removeListener('AddToWishList',this.addToWishList);
  };

   arrCard=[];

  addToCard=(id)=>{
    let goods=this.props.goods.slice();
    let elem=goods.find(item=>item.code===id);
    this.arrCard.push(elem);
    this.setState({card:this.arrCard}, this.announce);
  };

  arrWishList=[];

  addToWishList=(id)=>{
    let goods=this.props.goods.slice();
    let elem=goods.find(item=>item.code===id);
    this.arrWishList.push(elem);
    this.setState({wishList:this.arrWishList}, this.announce);
  };


changeBody=(num)=>{
 if(num!=this.state.toShowBodyMode){
    this.setState({toShowBodyMode:num}, this.announce);
 }
};

search=(word)=>{
    let needfulElem=this.props.goods.slice();
    needfulElem=needfulElem.filter(item=> item.itemName==word|| item.indexOf(word)!=-1);
    this.setState( { goods:needfulElem }, this.announce );
    

};

announce=()=>{
    console.log("Something has changed");
}
  

    render() {
        let categoriesCheck=this.props.goods.slice();
        let categories=[];
        categoriesCheck.forEach(elem=> {
         if (categories.indexOf(elem.category)===-1){
          categories.push(elem.category);
         }
        });
       

      return(
      <div>
      <Top shopName={this.props.shopName}/>
      <MainBody goods={this.state.goods} categories={categories} bodyChange={this.state.toShowBodyMode} card={this.state.card} wishList={this.state.wishList} />
      <Footer/>
      </div>
      )
    };

  };
  
  

  export default Home;

