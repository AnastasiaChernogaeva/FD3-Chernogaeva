import React from 'react';
import PropTypes from 'prop-types';

import './error.css';


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
    Password2:"",


    allPersonalInfoHash:{},
    allPersonalInfoKey:"",

    errorpet:"",
    errorcolor:"",
    pet:"",
    color:"",

    disabled:null,
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
  Password2:"",
  allPersonalInfoHash:{},
  allPersonalInfoKey:"",
  errorpet:"",
  errorcolor:"",
  pet:"",
  color:"",
}, this.announce);
}


  changeName=(EO)=>{
    let textError="Введите имя!"
    if(EO.target.value===""){
      this.setState({errorName:textError, Name:EO.target.value, disabled:"disabled",}, this.announce);
    }
    else{
      this.setState({errorName:"", Name:EO.target.value,}, this.announce);
    }
  }


  changeLastName=(EO)=>{
    let textError="Введите фамилию!"
    if(EO.target.value===""){
      this.setState({errorLastName:textError, LastName:EO.target.value, disabled:"disabled",}, this.announce);
    }
    else{
      this.setState({errorLastName:"", LastName:EO.target.value, }, this.announce);
    }
  }


  changeMail=(EO)=>{
    let textError="Введите почту!"
    if(EO.target.value===""){
      this.setState({errorMail:textError, Mail:EO.target.value, disabled:"disabled",}, this.announce);
    }
    else{
      this.setState({errorMail:"", Mail:EO.target.value,}, this.announce);
    }
  }


  changePassword=(EO)=>{
    if(EO.target.value.length<8){
      let textError="Введите не менее 8 символов!";
      this.setState({errorPassword:textError,errorPasswordCheck:"", Password:EO.target.value, disabled:"disabled",}, this.announce);
    }
    else if(EO.target.value!=this.state.Password2){
      let textError="Пароли не совпадают!";
      this.setState({errorPasswordCheck:textError, errorPassword:"", Password:EO.target.value, disabled:"disabled", }, this.announce);
    }
    else{
      this.setState({errorPassword:"", errorPasswordCheck:"", Password:EO.target.value,}, this.announce);
    }
  }


  toequalPasswords=(EO)=>{
    let textError="Пароли не совпадают!"
    this.setState({Password2:EO.target.value,disabled:"disabled",}, this.announce);
    if(EO.target.value!=this.state.Password){
      this.setState({errorPasswordCheck:textError,}, this.announce);
    }
    else{
      this.setState({errorPasswordCheck:"",}, this.announce);
    }
  };

  pet=(EO)=>{
    let textError="Не оставлять поле пустым в ваших интересах!"
    if(EO.target.value===""){
      this.setState({errorpet:textError,  pet:EO.target.value, disabled:"disabled",}, this.announce);
    }
    else{
      this.setState({errorpet:"",  pet:EO.target.value,}, this.announce);
    }
  };

  color=(EO)=>{
    let textError="Не оставлять поле пустым в ваших интересах!"
    if(EO.target.value===""){
      this.setState({errorcolor:textError, color:EO.target.value, disabled:"disabled",}, this.announce);
    }
    else{
      this.setState({errorcolor:"",  color:EO.target.value,}, this.announce);
    }
  };





  highTimetoAddNewPerson=()=>{
    // if (this.state.errorName===""&&this.state.errorLastName===""&&this.state.errorMail===""&&this.state.errorPassword===""&&this.state.errorPasswordCheck===""){
      let bornTime=new Date();
      let registerYear=bornTime.getFullYear();
      let personInfo=this.state.Mail+"_"+this.state.Password;
      let objMainInfo={name:this.state.Name, lastName:this.state.LastName, password:this.state.Password, mail:this.state.Mail, year:registerYear, color:this.state.color, pet:this.state.pet,}
      // this.setState({allPersonalInfo:{[personInfo]:objMainInfo,},}, this.newEvent);
      this.setState({allPersonalInfoKey:personInfo, allPersonalInfoHash:objMainInfo,}, this.newEvent);
    // }
    // else{
    //   this.setState({disabled:disabled,}, this.announce);
    // }

  }


  newEvent=()=>{
    pageEvents.emit('newPersonWantsToBeAddedToOurBigFamily',this.state.allPersonalInfoKey,this.state.allPersonalInfoHash);
    this.cleanTheForm();
    setTimeout(pageEvents.emit('ChangeBody',1), 3000);//переходим на главную

  }


  disabilityForButtons=()=>{
         if (this.state.errorName===""&&this.state.errorLastName===""&&this.state.errorMail===""&&this.state.errorPassword===""&&this.state.errorPasswordCheck===""){
          this.setState({disabled:null,}, this.announce);
         }
        else {
          this.setState({disabled:"disabled",}, this.announce);

        }
  }

  render() {

    return (
     <div>
       <form className="register" onChange={this.disabilityForButtons}>
       <h1>Регистрация</h1>
       <label htmlFor="NameId">Имя</label><br/><br/>
       <input type="text" id="NameId" onChange={this.changeName} value={this.state.Name} placeholder="Валентина"/><span className="error">{this.state.errorName}</span><br/><br/>
       <label htmlFor="LastNameId">Фамилия</label><br/><br/>
       <input type="text" id="LastNameId" onChange={this.changeLastName} value={this.state.LastName} placeholder="Домаринская"/><span className="error">{this.state.errorLastName}</span><br/><br/>
       <label htmlFor="MailId">Электронная почта</label><br/><br/>
       <input type="text" id="MailId" onChange={this.changeMail} value={this.state.Mail} /><span className="error">{this.state.errorMail}</span><br/><br/>
       <label htmlFor="Password">Пароль</label><br/><br/>
       <input type="password" id="Password" onChange={this.changePassword} value={this.state.Password}/><span className="error">{this.state.errorPassword}</span><span className="error">{this.state.errorPasswordCheck}</span><br/><br/>
       <label htmlFor="RePassword">Подтвердите пароль</label><br/><br/>
       <input type="password" id="RePassword" onChange={this.toequalPasswords} value={this.state.Password2} /><span className="error">{this.state.errorPasswordCheck}</span><br/><br/>
       <h3>Дополнительная информация для восстановления доступа к аккаунту</h3>

      <label htmlFor="pet">Введите имя первого домашнего питомца</label><br/><br/><input type="text" id="pet" onChange={this.pet} value={this.state.pet}/> <span className="error">{this.state.errorpet}</span><br/><br/>
      <label htmlFor="color">Введите ваш любимый цвет</label><br/><br/><input type="text" id="color" onChange={this.color} value={this.state.color}/> <span className="error">{this.state.errorcolor}</span><br/><br/>
      

      </form>
      <div className="Top_Buttons">
       <input type="button" value="Зарегистрироваться" onClick={this.highTimetoAddNewPerson} disabled={this.state.disabled}/>
       <input type="button" value="Сбросить все" onClick={this.cleanTheForm}/>
      </div>
      
     </div>
    );

  }

}

export default Registration;
