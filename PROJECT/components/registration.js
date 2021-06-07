import React from 'react';
import PropTypes from 'prop-types';

/*import './mobileClients.css';*/


import {pageEvents} from './events';

class Registration extends React.PureComponent {

/*  static propTypes = {
    goods:PropTypes.array,
    categories:PropTypes.array,
    bodyChange:PropTypes.number,
    card:PropTypes.array,
    wishList:PropTypes.array,
  };*/

  state = {
    errorName:"",
    errorLastName:"",
    errorMail:"",
    errorPassword:"",
    errorPasswordCheck:"",
    Name:"",
    LastName:"",
    Mail:"",
    Password:"",

  };

 /* componentWillReceiveProps = (newProps) => {
    console.log("MobileClient info="+this.props.info+" componentWillReceiveProps");
    if(this.state.info!=newProps.info){
      this.setState({info:newProps.info});
    }
    
  };*/

  
announce=()=>{
  console.log("Something has changed");
}


cleanTheForm=()=>{
  this.setState( {  
  errorName:"",
  errorLastName:"",
  errorMail:"",
  errorPassword:"",
  errorPasswordCheck:"",
  Name:"",
  LastName:"",
  Mail:"",
  Password:"",
}, this.announce);
}


  changeName=(EO)=>{
    let textError="Введите имя!"
    if(EO.target.value===0){
      this.setState({errorName:textError,}, this.announce);
    }
    else{
      this.setState({errorName:"", Name:EO.target.value,}, this.announce);
    }
  }


  changeLastName=(EO)=>{
    let textError="Введите фамилию!"
    if(EO.target.value===0){
      this.setState({errorLastName:textError,}, this.announce);
    }
    else{
      this.setState({errorLastName:"", LastName:EO.target.value,}, this.announce);
    }
  }


  changeMail=(EO)=>{
    let textError="Введите почту!"
    if(EO.target.value===0){
      this.setState({errorMail:textError,}, this.announce);
    }
    else{
      this.setState({errorMail:"", Mail:EO.target.value,}, this.announce);
    }
  }


  changePassword=(EO)=>{
    let textError="Введите не менее 8 символов!"
    if(EO.target.value<8){
      this.setState({errorPassword:textError,}, this.announce);
    }
    else{
      this.setState({errorPassword:"", Password:EO.target.value,}, this.announce);
    }
  }


  toequalPasswords=(EO)=>{
    let textError="Пароли не совпадают!"
    if(EO.target.value!=this.state.Password){
      this.setState({errorPasswordCheck:textError,}, this.announce);
    }
    else{
      this.setState({errorPasswordCheck:"",}, this.announce);
    }
  }




  highTimetoAddNewPerson=()=>{

  }

  render() {

    return (
     <div>
       <h1>Регистрация</h1>
       <label for="NameId">Имя</label>
       <input type="text" id="NameId" onChange={this.changeName} value={this.state.Name} placeholder="Валентина"/><span className="error">{this.state.errorName}</span>
       <label for="LastNameId">Фамилия</label>
       <input type="text" id="LastNameId" onChange={this.changeLastName} value={this.state.LastName} placeholder="Домаринская"/><span className="error">{this.state.errorLastName}</span>
       <label for="MailId">Электронная почта</label>
       <input type="text" id="MailId" onChange={this.changeMail} value={this.state.Mail} /><span className="error">{this.state.errorMail}</span>
       <label for="Password">Пароль</label>
       <input type="password" id="Password" onChange={this.changePassword} value={this.state.Password}/><span className="error">{this.state.errorPassword}</span>
       <label for="RePassword">Подтвердите пароль</label>
       <input type="password" id="RePassword" onChange={this.toequalPasswords} value={this.state.Password} /><span className="error">{this.state.errorPasswordCheck}</span>
       <input type="button" value="Зарегистрироваться" onClick={this.highTimetoAddNewPerson}/>
       <input type="button" value="Сбросить все" onClick={this.cleanTheForm}/>
     </div>
    );

  }

}

export default Registration;
