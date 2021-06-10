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

    allPersonalInfo:{},

    errorage:"",
    errorpet:"",
    errorcolor:"",
    age:"",
    pet:"",
    color:"",

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
  allPersonalInfo:{},
  errorage:"",
  errorpet:"",
  errorcolor:"",
  age:"",
  pet:"",
  color:"",
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
  };

  pet=(EO)=>{
    let textError="Не оставлять поле пустым в ваших интересах!"
    if(EO.target.value!=this.state.pet){
      this.setState({errorpet:textError,}, this.announce);
    }
    else{
      this.setState({errorpet:"",  pet:EO.target.value,}, this.announce);
    }
  };

  color=(EO)=>{
    let textError="Не оставлять поле пустым в ваших интересах!"
    if(EO.target.value!=this.state.color){
      this.setState({errorcolor:textError,}, this.announce);
    }
    else{
      this.setState({errorcolor:"",  color:EO.target.value,}, this.announce);
    }
  };

  age=(EO)=>{
    let textError="Не оставлять поле пустым в ваших интересах!"
    if(EO.target.value!=this.state.age){
      this.setState({errorage:textError,}, this.announce);
    }
    else{
      this.setState({errorage:"",  age:EO.target.value,}, this.announce);
    }
  };



  highTimetoAddNewPerson=()=>{
  let bornTime=new Date();
  let registerYear=bornTime.getFullYear();
  let personInfo=this.state.Mail+"_"+this.state.Password;
  let objMainInfo={name:this.state.Name, lastName:this.state.LastName, password:this.state.Password, mail:this.state.Mail, year:registerYear, age:this.state.age, color:this.state.color, pet:this.state.pet,}
  this.setState({allPersonalInfo:{[personInfo]:objMainInfo,},}, this.newEvent);
  }


  newEvent=()=>{
    pageEvents.emit('newPersonWantsToBeAddedToOurBigFamily',this.state.allPersonalInfo);
    this.cleanTheForm();
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
       <h3>Дополнительная информация для восстановления доступа к аккаунту</h3>

      <label for="pet">Введите имя первого домашнего питомца</label><input type="text" id="pet" onChange={this.pet} value={this.state.pet}/><span className="error">{this.state.errorpet}</span>
      <label for="color">Введите ваш любимый цвет</label><input type="text" id="color" onChange={this.color} value={this.state.color}/><span className="error">{this.state.errorcolor}</span>
      <label for="age">Введите ваш возраст</label><input type="text" id="age" onChange={this.age} value={this.state.age}/><span className="error">{this.state.errorage}</span>

       
       <input type="button" value="Зарегистрироваться" onClick={this.highTimetoAddNewPerson}/>
       <input type="button" value="Сбросить все" onClick={this.cleanTheForm}/>

      
     </div>
    );

  }

}

export default Registration;
