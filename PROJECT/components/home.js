import React from 'react';
import PropTypes from 'prop-types';


import Top from './top.js';
import BodyShop from './body.js';
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
    };

  componentDidMount = () => {
    pageEvents.addListener('ChangeBody',this.changeBody);
    clientEvents.addListener('Search',this.search);
   /* clientEvents.addListener('NewElemAdd',this.add);
    clientEvents.addListener('Cancel',this.close);
    clientEvents.addListener('EditElemAdd',this.save);*/
    };

    
  componentWillUnmount = () => {
    clientEvents.removeListener('ChangeBody',this.changeBody);
    clientEvents.removeListener('Search',this.search);
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

     

      return(
      <div>
      <Top shopName={this.props.shopName}/>
      <BodyShop goods={this.state.goods} bodyChange={this.state.toShowBodyMode}/>
      <Footer/>
      </div>
      )
    };

  };
  
  

  export default Home;

