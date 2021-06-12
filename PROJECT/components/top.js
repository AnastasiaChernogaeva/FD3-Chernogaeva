import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { personThunkAC } from "../redux/fetchThunk";


import './top.css';

import {pageEvents} from './events';

class Top extends React.PureComponent {

  static propTypes = {
   shopName:PropTypes.string,
   person: PropTypes.object,
  };

  state = {
    searchWord:"",
  };

  componentDidMount() {
    this.props.dispatch( personThunkAC(this.props.dispatch) );
  }
/*
  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient info="+this.props.info+" componentWillReceiveProps");
    if(this.state.info!=newProps.info){
      this.setState({info:newProps.info});
    }
    
  };*/
 remember=(EO)=>{
     this.setState({searchWord:EO.target.value,}, this.announce);
 }
 search=()=>{
    pageEvents.emit('Search', this.state.searchWord);
 };
 change=(EO)=>{
    pageEvents.emit('ChangeBody',EO.target.id);
 };

 announce=()=>{
    console.log("Something has changed");
}


  render() {
    if ( this.props.countries.status===2 ){

    
    return (
     <div className="Top">
         <div>
             <span>{this.props.shopName}</span>
             <input type="text" onChange={this.remember}></input><input type="button" onClick={this.search}/>
         </div>
         <div>
             <input type="button" onClick={this.change} value="Главная" id="1"/>
             <input type="button" onClick={this.change} value="Корзина" id="2"/>
             <input type="button" onClick={this.change} value="WishList" id="3"/>
             <input type="button" onClick={this.change} value="Регистрация" id="4"/>
             <input type="button" onClick={this.change} value="Войти" id="5"/>
         </div>
     </div>
    
    );
    }
    if ( this.props.countries.status===3){
      return (
        <div className="Top">
            <div></div>
            <div>
                <span>{this.props.shopName}</span>
                <input type="text" onChange={this.remember}></input><input type="button" onClick={this.search}/>
            </div>
            <div>
                <input type="button" onClick={this.change} value="Главная" id="1"/>
                <input type="button" onClick={this.change} value="Корзина" id="2"/>
                <input type="button" onClick={this.change} value="WishList" id="3"/>
                <input type="button" onClick={this.change} value="Выйти" id="6"/>
            </div>
        </div>
       
       );
    
  }

}

const mapStateToProps = function (state) {
  return {
    person: state.person,
  };
};

export default connect(mapStateToProps)(Top);


//export default Top;
