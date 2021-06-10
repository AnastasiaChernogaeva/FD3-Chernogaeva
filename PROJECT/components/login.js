import React from 'react';
import PropTypes from 'prop-types';

/*import './mobileClients.css';*/


import {pageEvents} from './events';

class Login extends React.PureComponent {

/*  static propTypes = {
    goods:PropTypes.array,
    categories:PropTypes.array,
    bodyChange:PropTypes.number,
    card:PropTypes.array,
    wishList:PropTypes.array,
  };*/

  state = {
    Mail:"",
    Password:"",
    errorMail:"",
    errorPassword:"",
    forgottenPassword:false,

    errorage:"",
    errorpet:"",
    errorcolor:"",
    age:"",
    pet:"",
    color:"",
    erroryear:"",
    year:"",

  };

/*   componentWillReceiveProps = (newProps) => {
    console.log("MobileClient info="+this.props.info+" componentWillReceiveProps");
    if(this.state.info!=newProps.info){
      this.setState({info:newProps.info});
    }
    
  };*/

  changeMail=(EO)=>{
    let textError="Введите почту!"
    if(EO.target.value===0){
      this.setState({errorMail:textError,}, this.announce);
    }
    else{
      this.setState({errorMail:"", Mail:EO.target.value,}, this.announce);
    }
  };

  changePassword=(EO)=>{
    let textError="Введите не менее 8 символов!"
    if(EO.target.value<8){
      this.setState({errorPassword:textError,}, this.announce);
    }
    else{
      this.setState({errorPassword:"", Password:EO.target.value,}, this.announce);
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

year=(EO)=>{
  let textError="Не оставлять поле пустым в ваших интересах!"
  if(EO.target.value!=this.state.year){
    this.setState({erroryear:textError,}, this.announce);
  }
  else{
    this.setState({erroryear:"",  year:EO.target.value,}, this.announce);
  }
};



  haveForgottenEverythingInTheirLives=()=>{
    this.setState({forgottenPassword:true},this.announce)
  }

  enter=()=>{
    let personInfo=this.state.Mail+"_"+this.state.Password;
    pageEvents.emit('enter',personInfo);
    this.cleanTheForm();

  }

  restore=()=>{
    let additionalPersonalInfo={pet:this.state.pet, year:this.state.year, color:this.state.color, age:this.state.age,};
    pageEvents.emit('restore', additionalPersonalInfo);
    this.cleanTheForm();
  }

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
};



  render() {

    let question=<div>
      <label for="pet">Введите имя первого домашнего питомца</label><input type="text" id="pet" onChange={this.pet} value={this.state.pet}/><span className="error">{this.state.errorpet}</span>
      <label for="color">Введите ваш любимый цвет</label><input type="text" id="color" onChange={this.color} value={this.state.color}/><span className="error">{this.state.errorcolor}</span>
      <label for="age">Введите ваш возраст</label><input type="text" id="age" onChange={this.age} value={this.state.age}/><span className="error">{this.state.errorage}</span>
      <label for="year">Введите год регистрации на нашем сайте</label><input type="text" id="year" onChange={this.year} value={this.state.year}/><span className="error">{this.state.errorage}</span>
      <input type="button" value="Восстановить пароль" onClick={this.restore}/>
    </div>

    let enter=<div>
      <h1>Вход в аккаунт</h1>
       <label for="MailId">Электронная почта</label>
       <input type="text" id="MailId" onChange={this.changeMail} value={this.state.Mail} /><span className="error">{this.state.errorMail}</span>
       <label for="Password">Пароль</label>
       <input type="password" id="Password" onChange={this.changePassword} value={this.state.Password}/><span className="error">{this.state.errorPassword}</span>
      <input type="button" value="Войти" onClick={this.enter}/>
      <input type="button" value="Забыли пароль" onClick={this.haveForgottenEverythingInTheirLives}/>
    </div>

    return (


     <div>
       
       {forgottenPassword==="false"&& enter}   
       {forgottenPassword==="true"&& question}
     </div>
    );

  }

}

export default Login;
