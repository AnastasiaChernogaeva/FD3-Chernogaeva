import React from 'react';
import PropTypes from 'prop-types';

/*import './mobileClients.css';*/
import './error.css';
import './media1.css';
import './media2.css';
import './media3.css';
import './shop.css';



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
    disabled:"disabled",

    errorTextPassword:"",
    PasswordForCheckup:"",
    changed:"",

  };

/*   componentWillReceiveProps = (newProps) => {
    console.log("MobileClient info="+this.props.info+" componentWillReceiveProps");
    if(this.state.info!=newProps.info){
      this.setState({info:newProps.info});
    }
    
  };*/

  componentDidMount = () => {
    
  window.onbeforeunload=this.befUnload;


    pageEvents.addListener('PasswordChanged',this.passwordChanged);
    pageEvents.addListener("wrongPage",this.errorSmthWrong);
    };

    
  componentWillUnmount = () => {
    pageEvents.removeListener('PasswordChanged',this.passwordChanged);
    pageEvents.removeListener("wrongPage",this.errorSmthWrong);

  };

befUnload=(EO)=>{
    EO=EO||window.event;
    // если текст изменён, попросим браузер задать вопрос пользователю
    if ( this.state.Mail!="")
      EO.returnValue='А у вас есть несохранённые изменения!';
    if ( this.state.Password!="")
      EO.returnValue='А у вас есть несохранённые изменения!';
    if ( this.state.color!="")
      EO.returnValue='А у вас есть несохранённые изменения!';
    if ( this.state.year!="")
      EO.returnValue='А у вас есть несохранённые изменения!';
    if ( this.state.pet!="")
      EO.returnValue='А у вас есть несохранённые изменения!';
  };

  errorSmthWrong=(text)=>{
  this.setState({errorTextPassword:text,PasswordForCheckup:"",  Password:"",}, this.disabilityForButton);
  }

  passwordChanged=(mean)=>{
    this.setState({passwordCanBeChanged:mean,}, this.disabilityForButton);
  }


  changeMail=(EO)=>{
    let textError="Введите почту!"
    if(EO.target.value===""){
      this.setState({errorMail:textError,  Mail:EO.target.value, disabled:"disabled",}, this.disabilityForButton);
    }
    else{
      this.setState({errorMail:"", Mail:EO.target.value,}, this.disabilityForButton);
    }
  };

  changePassword=(EO)=>{
    let textError="Введите не менее 8 символов!"
    if(EO.target.value.length<7){
      this.setState({errorPassword:textError,Password:EO.target.value, disabled:"disabled",}, this.disabilityForButton);
    }
    else{
      this.setState({errorPassword:"", Password:EO.target.value,}, this.disabilityForButton);
    }
  };

  
  toequalPasswords=(EO)=>{
    let textError="Пароли не совпадают!"
    if(EO.target.value!=this.state.Password){
      this.setState({errorPasswordCheck:textError, PasswordForCheckup:EO.target.value,}, this.disabilityForButton);
    }
    else{
      this.setState({errorPasswordCheck:"", PasswordForCheckup:EO.target.value,}, this.disabilityForButton);
    }
  };


  
pet=(EO)=>{
  let textError="Не оставлять поле пустым в ваших интересах!"
  if(EO.target.value===""){
    this.setState({errorpet:textError, pet:EO.target.value,}, this.disabilityForButton);
  }
  else{
    this.setState({errorpet:"",  pet:EO.target.value,}, this.disabilityForButton);
  }
};

color=(EO)=>{
  let textError="Не оставлять поле пустым в ваших интересах!"
  if(EO.target.value===""){
    this.setState({errorcolor:textError, color:EO.target.value,}, this.disabilityForButton);
  }
  else{
    this.setState({errorcolor:"",  color:EO.target.value,}, this.disabilityForButton);
  }
};



year=(EO)=>{
  let textError="Не оставлять поле пустым в ваших интересах!"
  if(EO.target.value===""){
    this.setState({erroryear:textError,  year:EO.target.value,}, this.disabilityForButton);
  }
  else{
    this.setState({erroryear:"",  year:EO.target.value,}, this.disabilityForButton);
  }
};



  haveForgottenEverythingInTheirLives=()=>{
    this.setState({forgottenPassword:true,errorTextPassword:"", disabled:null,},this.disabilityForButton)
  }

  enter=()=>{
    // let personInfo=this.state.Mail+"_"+this.state.Password;
    let wordMail=this.state.Mail.trim();
    let wordPass=this.state.Password.trim();
    let personInfo=wordMail+"_"+wordPass;
    pageEvents.emit('enter',personInfo);
    // setTimeout(pageEvents.emit('ChangeBody',1), 4000);//переходим на главную
  }

  restore=()=>{
    let wordColor=this.state.color.trim();
    let wordPet=this.state.pet.trim();
    let wordYear=this.state.year.trim();
    let additionalPersonalInfo={color:wordColor, pet:wordPet, year:wordYear, /* disabled:null,*/};
    pageEvents.emit('restore', additionalPersonalInfo);
    
  }

  saveNewPassword=()=>{

    pageEvents.emit('saveNewPassword', this.state.PasswordForCheckup);
    this.setState({changed:"Пароль изменен успешно."},this.announce);
   setTimeout(this.cleanTheForm,2500);
  }

  announce=()=>{
    console.log("Something has changed");
}



cleanTheForm=()=>{
  this.setState( {  
    changed:"",
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
  disabled:"disabled",
  errorTextPassword:"",
  forgottenPassword:false,
  year:"",
}, this.announce);
};


change=()=>{
  let num=4;//страница регистрация отмечена под номером 4 в home.js
  pageEvents.emit('ChangeBody',num);

}


disabilityForButton=()=>{
  if (this.state.forgottenPassword===false){
    if (this.state.Mail!=""){
      if (this.state.Password!=""){
    if (this.state.errorMail===""){
      if(this.state.errorPassword===""){
        this.setState({disabled:null,}, this.announce);

      }
      else 
   this.setState({disabled:"disabled",}, this.announce);
    }
    else 
   this.setState({disabled:"disabled",}, this.announce);
  }
  else 
this.setState({disabled:"disabled",}, this.announce);
}
else 
this.setState({disabled:"disabled",}, this.announce);
  }
  else if( this.state.passwordCanBeChanged==""){
      if(this.state.forgottenPassword===true){
        if (this.state.erroerrorpetrMail===""){
          if(this.state.erroryear===""){
            if(this.state.errorcolor==="")
            this.setState({disabled:null,}, this.announce);
          }}
      }
  } 
  else if(this.state.passwordCanBeChanged===true){
      if (this.state.PasswordForCheckup!=""){
        if (this.state.Password!=""){
      if (this.state.errorPasswordCheck===""){
        if(this.state.errorPassword===""){
          this.setState({disabled:null,}, this.announce);
  
        }
        else 
     this.setState({disabled:"disabled",}, this.announce);
      }
      else 
     this.setState({disabled:"disabled",}, this.announce);
    }
    else 
  this.setState({disabled:"disabled",}, this.announce);
  }
  else 
this.setState({disabled:"disabled",}, this.announce);
  
}
  else 
   this.setState({disabled:"disabled",}, this.announce);

 
}

time=(EO)=>{
  if(EO.charCode==13){
    this.ffocus(EO.target.id);
   }
 }

 ffocus=(num)=>{
  let focNextElem;
   if(this.state.forgottenPassword===false){
    focNextElem=document.getElementById("Password");
    focNextElem.focus();
   }

   if(num=="Password"){
    if(this.state.disabled==null)
    this.enter();
   }
   if(num=="pet"){
    focNextElem=document.getElementById("color");
    focNextElem.focus();
  }
  if(num=="color"){
    focNextElem=document.getElementById("year");
    focNextElem.focus();
  }
  if(num=="year"){
    if(this.state.disabled==null)
    this.restore(); 
   }
   if( this.state.passwordCanBeChanged===true){
    focNextElem=document.getElementById("RePassword");
    focNextElem.focus();
   }

   if(num=="RePassword"){
    if(this.state.disabled==null)
    this.saveNewPassword(); 
   }
   
   
   
 }


  render() {

    let question=<div className="Top_Buttons">
      <form onChange={this.disabilityForButton}>
      <label htmlFor="pet">Введите имя первого домашнего питомца</label><br/><br/>
      <input type="text" id="pet"  onKeyPress={this.time} onChange={this.pet}  value={this.state.pet}/> <span className="error">{this.state.errorpet}</span><br/><br/>
      <label htmlFor="color">Введите ваш любимый цвет</label><br/><br/>
      <input type="text" id="color"  onKeyPress={this.time}  onChange={this.color}  value={this.state.color}/> <span className="error">{this.state.errorcolor}</span><br/><br/>
       <label htmlFor="year">Введите год регистрации на нашем сайте</label><br/><br/>
       <input type="text" id="year"  onKeyPress={this.time} onChange={this.year}  value={this.state.year}/> <span className="error">{this.state.erroryear}</span><br/><br/>
       <input type="button" value="Восстановить пароль"  onClick={this.restore}/><br/><br/>
       </form>
       </div>

    let enter=<div className="Top_Buttons">
               <form className="login" onChange={this.disabilityForButton}>
      <h1>Вход в аккаунт</h1>
       <label htmlFor="MailId">Электронная почта</label><br/><br/>
       <input type="text" id="MailId" onChange={this.changeMail}  value={this.state.Mail}  onKeyPress={this.time} /><span className="error">{this.state.errorMail}</span><br/><br/>
       <label htmlFor="Password">Пароль</label><br/><br/>
       <input type="password" id="Password" onChange={this.changePassword}  onKeyPress={this.time} value={this.state.Password}/><span className="error">{this.state.errorPassword}</span><br/><br/>
      <input type="button" value="Войти" onClick={this.enter} disabled={this.state.disabled}/>
      <input type="button" value="Забыли пароль" onClick={this.haveForgottenEverythingInTheirLives}/>
      </form> 
    </div>;

    let youCanNotChangeYourPassword=<p>К сожалению, Вы не можете изменить пароль. Такого пользователя не сущствует. Вы можете пройти регистрацию <a href="" onClick={this.change}>здесь</a></p>
    
    let youCanChangeYourPassword=<div className="Top_Buttons">
      <form  onChange={this.disabilityForButton}>
       <label htmlFor="Password">Введите новый пароль</label><br/><br/>
       <input type="password" id="Password" onKeyPress={this.time}  onChange={this.changePassword} value={this.state.Password}/><span className="error">{this.state.errorPassword}</span><br/><br/>
       <label htmlFor="RePassword">Подтвердите пароль</label><br/><br/>
       <input type="password" id="RePassword" onKeyPress={this.time} onChange={this.toequalPasswords}   value={this.state.PasswordForCheckup} /><span className="error">{this.state.errorPasswordCheck}</span><br/><br/>
       <input type="button" value="Изменить пароль" onClick={this.saveNewPassword} disabled={this.state.disabled}/>
       </form>
    </div>

    
    let textErr=<p className="error">Неверный логин или пароль! Попробуйте еще раз!</p>
    
    let textPassManagedTochange=<p>{this.state.changed}</p>

    return (
     <div>
    
      {this.state.changed!="" && textPassManagedTochange}

      {this.state.errorTextPassword=="1" && textErr}     

       {this.state.forgottenPassword===false && enter}    
      
       { this.state.passwordCanBeChanged=="" && this.state.forgottenPassword===true && question}

       {this.state.changed=="" &&this.state.passwordCanBeChanged===true && youCanChangeYourPassword}
       {this.state.passwordCanBeChanged===false && youCanNotChangeYourPassword}
       
     </div>
    );
  }
  

}

export default Login;
