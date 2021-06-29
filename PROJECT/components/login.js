import React from 'react';
import PropTypes from 'prop-types';

/*import './mobileClients.css';*/
import './error.css';


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

  
    errorpet:"",
    errorcolor:"",
    pet:"",
    color:"",
    erroryear:"",
    year:"",


    passwordCanBeChanged:"",
    disabled:null,

    errorText:"",

  };

/*   componentWillReceiveProps = (newProps) => {
    console.log("MobileClient info="+this.props.info+" componentWillReceiveProps");
    if(this.state.info!=newProps.info){
      this.setState({info:newProps.info});
    }
    
  };*/

  componentDidMount = () => {
    pageEvents.addListener('PasswordChanged',this.passwordChanged);
    pageEvents.addListener('wrongPage',this.errorSmthWrong);
    };

    
  componentWillUnmount = () => {
    pageEvents.removeListener('PasswordChanged',this.passwordChanged);
    pageEvents.removeListener('wrongPage',this.errorSmthWrong);

  };

  errorSmthWrong=(text)=>{
  this.setState({errorText:text,}, this.announce);
  }

  passwordChanged=(mean)=>{
    this.setState({passwordCanBeChanged:mean,}, this.announce);
  }


  changeMail=(EO)=>{
    let textError="Введите почту!"
    if(EO.target.value===""){
      this.setState({errorMail:textError,  Mail:EO.target.value, disabled:"disabled",}, this.announce);
    }
    else{
      this.setState({errorMail:"", Mail:EO.target.value,}, this.announce);
    }
  };

  changePassword=(EO)=>{
    let textError="Введите не менее 8 символов!"
    if(EO.target.value.length<8){
      this.setState({errorPassword:textError,Password:EO.target.value, disabled:"disabled",}, this.announce);
    }
    else{
      this.setState({errorPassword:"", Password:EO.target.value,}, this.announce);
    }
  };

  
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
  if(EO.target.value===""){
    this.setState({errorpet:textError, pet:EO.target.value,}, this.announce);
  }
  else{
    this.setState({errorpet:"",  pet:EO.target.value,}, this.announce);
  }
};

color=(EO)=>{
  let textError="Не оставлять поле пустым в ваших интересах!"
  if(EO.target.value===""){
    this.setState({errorcolor:textError, color:EO.target.value,}, this.announce);
  }
  else{
    this.setState({errorcolor:"",  color:EO.target.value,}, this.announce);
  }
};



year=(EO)=>{
  let textError="Не оставлять поле пустым в ваших интересах!"
  if(EO.target.value===""){
    this.setState({erroryear:textError,  year:EO.target.value,}, this.announce);
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
    // setTimeout(pageEvents.emit('ChangeBody',1), 4000);//переходим на главную
  }

  restore=()=>{
    let additionalPersonalInfo={pet:this.state.pet, year:this.state.year, color:this.state.color,};
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
  errorpet:"",
  errorcolor:"",
  pet:"",
  color:"",
  passwordCanBeChanged:"",
  disabled:null,
  errorText:"",
}, this.announce);
};


change=()=>{
  let num=4;//страница регистрация отмечена под номером 4 в home.js
  pageEvents.emit('ChangeBody',num);

}


disabilityForButton=()=>{
  if (this.state.errorMail===""&&this.state.errorPassword===""){
   this.setState({disabled:null,}, this.announce);
  }
 else {
   this.setState({disabled:"disabled",}, this.announce);

 }
}


  render() {

    let question=<div className="Top_Buttons">
      <label htmlFor="pet">Введите имя первого домашнего питомца</label><br/><br/>
      <input type="text" id="pet" onChange={this.pet} value={this.state.pet}/> <span className="error">{this.state.errorpet}</span><br/><br/>
      <label htmlFor="color">Введите ваш любимый цвет</label><br/><br/>
      <input type="text" id="color" onChange={this.color} value={this.state.color}/> <span className="error">{this.state.errorcolor}</span><br/><br/>
       <label htmlFor="year">Введите год регистрации на нашем сайте</label><br/><br/>
       <input type="text" id="year" onChange={this.year} value={this.state.year}/> <span className="error">{this.state.erroryear}</span><br/><br/>
       <input type="button" value="Восстановить пароль" onClick={this.restore}/><br/><br/>
      </div>

    let enter=<div className="Top_Buttons">
               <form className="login" onChange={this.disabilityForButton}>
      <h1>Вход в аккаунт</h1>
       <label htmlFor="MailId">Электронная почта</label><br/><br/>
       <input type="text" id="MailId" onChange={this.changeMail} value={this.state.Mail} /><span className="error">{this.state.errorMail}</span><br/><br/>
       <label htmlFor="Password">Пароль</label><br/><br/>
       <input type="password" id="Password" onChange={this.changePassword} value={this.state.Password}/><span className="error">{this.state.errorPassword}</span><br/><br/>
      <input type="button" value="Войти" onClick={this.enter} disabled={this.state.disabled}/>
      <input type="button" value="Забыли пароль" onClick={this.haveForgottenEverythingInTheirLives}/>
      </form> 
    </div>;

    let youCanNotChangeYourPassword=<p>К сожалению, Вы не можете изменить пароль. Такого пользователя не сущствует. Вы можете пройти регистрацию <a href="" onClick={this.change}>здесь</a></p>
    
    let youCanChangeYourPassword=<div className="Top_Buttons">
       <label htmlFor="Password">Введите новый пароль</label><br/><br/>
       <input type="password" id="Password" onChange={this.changePassword} value={this.state.Password}/><span className="error">{this.state.errorPassword}</span><br/><br/>
       <label htmlFor="RePassword">Подтвердите пароль</label><br/><br/>
       <input type="password" id="RePassword" onChange={this.toequalPasswords} value={this.state.Password} /><span className="error">{this.state.errorPasswordCheck}</span><br/><br/>
    </div>

    // if(this.state.forgottenPassword==="false"){
      
    // return (  <div>
    //     <h1>Вход в аккаунт</h1>
    //    <label htmlFor="MailId">Электронная почта</label>
    //    <input type="text" id="MailId" onChange={this.changeMail} value={this.state.Mail} /><span className="error">{this.state.errorMail}</span>
    //    <label htmlFor="Password">Пароль</label>
    //    <input type="password" id="Password" onChange={this.changePassword} value={this.state.Password}/><span className="error">{this.state.errorPassword}</span>
    //   <input type="button" value="Войти" onClick={this.enter}/>
    //   <input type="button" value="Забыли пароль" onClick={this.haveForgottenEverythingInTheirLives}/>
    
    // </div>);
    // }
    // else if (this.state.forgottenPassword==="true"){
    //   switch(this.state.passwordCanBeChanged){
    //     case "false":
    //       return(<p>К сожалению, Вы не можете изменить пароль. Такого пользователя не сущствует. Вы можете пройти регистрацию <a href="" onClick={this.change}>здесь</a></p>);
    //     case "":
    //       return "";
    //     case "true":
    //       return (<div>
    //         <label htmlFor="Password">Введите новый пароль</label>
    //         <input type="password" id="Password" onChange={this.changePassword} value={this.state.Password}/><span className="error">{this.state.errorPassword}</span>
    //         <label htmlFor="RePassword">Подтвердите пароль</label>
    //         <input type="password" id="RePassword" onChange={this.toequalPasswords} value={this.state.Password} /><span className="error">{this.state.errorPasswordCheck}</span>
    //      </div>);

    //   }
    //   return(<div>
    //     <label htmlFor="pet">Введите имя первого домашнего питомца</label><input type="text" id="pet" onChange={this.pet} value={this.state.pet}/><span className="error">{this.state.errorpet}</span>
    //     <label htmlFor="color">Введите ваш любимый цвет</label><br/><input type="text" id="color" onChange={this.color} value={this.state.color}/><span className="error">{this.state.errorcolor}</span>
    //     <label htmlFor="year">Введите год регистрации на нашем сайте</label><input type="text" id="year" onChange={this.year} value={this.state.year}/><span className="error">{this.state.erroryear}</span>
    //     <input type="button" value="Восстановить пароль" onClick={this.restore}/>
    //   </div>);
    // };

  
if (this.state.errorText!=""){
  let textErr=this.state.errorText;
return(<p>{textErr}</p>);
}
else{
    return (


     <div>
       {/* <div>
         <form className="login" onChange={this.disabilityForButton}>
      <h1>Вход в аккаунт</h1>
       <label htmlFor="MailId">Электронная почта</label><br/>
       <input type="text" id="MailId" onChange={this.changeMail} value={this.state.Mail} /><span className="error">{this.state.errorMail}</span><br/>
       <label htmlFor="Password">Пароль</label><br/>
       <input type="password" id="Password" onChange={this.changePassword} value={this.state.Password}/><span className="error">{this.state.errorPassword}</span><br/>
      <input type="button" value="Войти" onClick={this.enter} disabled={this.state.disabled}/>
      <input type="button" value="Забыли пароль" onClick={this.haveForgottenEverythingInTheirLives}/>
      </form> 
    </div>*/}
       {this.state.forgottenPassword===false && enter}    
       {this.state.forgottenPassword===true && question}

       {this.state.passwordCanBeChanged===true && youCanChangeYourPassword}
       {this.state.passwordCanBeChanged===false && youCanNotChangeYourPassword}
       
     </div>
    );
  }
  }

}

export default Login;
