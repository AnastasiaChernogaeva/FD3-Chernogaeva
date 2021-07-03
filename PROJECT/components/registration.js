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

    disabled:"disabled",

    errorVV:null,

    suchPerson:null,
    // typeTestB:"buttOn",
  };



  componentDidMount = () => {
    window.onbeforeunload=this.befUnload;
    pageEvents.addListener("WehavealreadyhadsuchPerson", this.changeEmailOrPassWord);
  };

    
  componentWillUnmount = () => {
    pageEvents.removeListener("WehavealreadyhadsuchPerson", this.changeEmailOrPassWord);
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
    if ( this.state.Name!="")
      EO.returnValue='А у вас есть несохранённые изменения!';
    if ( this.state.LastName!="")
      EO.returnValue='А у вас есть несохранённые изменения!';
    if ( this.state.pet!="")
      EO.returnValue='А у вас есть несохранённые изменения!';
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
  
  errorVV:null,

  suchPerson:null,
}, this.announce);
}




  changeName=(EO)=>{
    let textError="Введите имя!"
    if(EO.target.value===""){
      this.setState({errorName:textError, Name:EO.target.value, disabled:"disabled",}, this.disabilityForButtons);
    }
    else{
      this.setState({errorName:"", Name:EO.target.value,}, this.disabilityForButtons);
    }
  }


  changeLastName=(EO)=>{
    let textError="Введите фамилию!"
    if(EO.target.value===""){
      this.disabilityForButtons();
      this.setState({errorLastName:textError, LastName:EO.target.value, disabled:"disabled",}, this.disabilityForButtons);
    }
    else{
      this.setState({errorLastName:"", LastName:EO.target.value, }, this.disabilityForButtons);
    }
  }


  changeMail=(EO)=>{
    let textError="Введите корректно почту!"
    let parts=EO.target.value.split("_");
    if(EO.target.value<3){
      this.setState({errorMail:textError, Mail:EO.target.value, disabled:"disabled",}, this.disabilityForButtons);
    }
    else if (parts.length>1){
      this.setState({errorMail:textError, Mail:EO.target.value, disabled:"disabled",}, this.disabilityForButtons);
    }
    else{
      this.setState({errorMail:"", Mail:EO.target.value,}, this.disabilityForButtons);
    }
   

  }


  changePassword=(EO)=>{
    // this.validation(EO.target.value);
    let parts=EO.target.value.split("_");
    if(EO.target.value.length<7){
      let textError="Введите не менее 8 символов!";
      this.setState({errorPassword:textError,errorPasswordCheck:"", Password:EO.target.value,disabled:"disabled", }, this.disabilityForButtons);
    }
    else if(EO.target.value!=this.state.Password2){
      let textError="Пароли не совпадают!";
      this.setState({errorPasswordCheck:textError, errorPassword:"", Password:EO.target.value,disabled:"disabled", }, this.disabilityForButtons);
    }
    else if(EO.target.value!=this.state.Password2){
      let textError="Пароли не совпадают!";
      this.setState({errorPasswordCheck:textError, errorPassword:"", Password:EO.target.value, disabled:"disabled", }, this.disabilityForButtons);
    }
    else if (parts.length>1){
      let textError="Введите пароль корректно!";
      this.setState({errorMail:textError, Mail:EO.target.value,disabled:"disabled", }, this.disabilityForButtons);
    }
    else{
      this.setState({errorPassword:"", errorPasswordCheck:"", Password:EO.target.value,}, this.disabilityForButtons);
    }

  }

  validation=(passWord)=>{
    // let lenP=/[^_,!=-<>@&?|*+$#]+/;
    // lenP.test(passWord);
    // if(lenP.test(passWord)==false){
    //   this.setState({errorVV:1, errorPasswordCheck:"", Password:passWord, disabled:"disabled",}, this.announce);
    // }
   
  }


  toequalPasswords=(EO)=>{
    this.validation(EO.target.value);
    let textError="Пароли не совпадают!"
    this.setState({Password2:EO.target.value, disabled:"disabled",}, this.disabilityForButtons);
    if(EO.target.value!=this.state.Password){
      this.setState({errorPasswordCheck:textError, disabled:"disabled",}, this.disabilityForButtons);
    }
    else{
      this.setState({errorPasswordCheck:"",}, this.disabilityForButtons);
    }
  };

  pet=(EO)=>{
    let textError="Не оставлять поле пустым в ваших интересах!"
    if(EO.target.value===""){
      this.setState({errorpet:textError,  pet:EO.target.value, }, this.disabilityForButtons);
    }
    else{
      this.setState({errorpet:"",  pet:EO.target.value,}, this.disabilityForButtons);
    }
  };

  color=(EO)=>{
    let textError="Не оставлять поле пустым в ваших интересах!"
    if(EO.target.value==""){
      this.setState({errorcolor:textError, color:EO.target.value, }, this.disabilityForButtons);
    }
    else{
      this.setState({errorcolor:"",  color:EO.target.value,}, this.disabilityForButtons);
    }

  };





  highTimetoAddNewPerson=()=>{
    // if (this.state.errorName===""&&this.state.errorLastName===""&&this.state.errorMail===""&&this.state.errorPassword===""&&this.state.errorPasswordCheck===""){
      let bornTime=new Date();
      let registerYear=bornTime.getFullYear();
      let wordColor=this.state.color.trim();
      let wordPet=this.state.pet.trim();
      let wordName=this.state.Name.trim();
      let wordLName=this.state.LastName.trim();
      let wordMail=this.state.Mail.trim();
      let wordPass=this.state.Password.trim();
      let personInfo=wordMail+"_"+wordPass;
      let objMainInfo={name:wordName, lastName:wordLName, password:wordPass, mail:wordMail, year:registerYear, color:wordColor, pet:wordPet, myOrders:[],}
      // let personInfo=this.state.Mail+"_"+this.state.Password;
      // let objMainInfo={name:this.state.Name, lastName:this.state.LastName, password:this.state.Password, mail:this.state.Mail, year:registerYear, color:this.state.color, pet:this.state.pet, myOrders:[],}
      // this.setState({allPersonalInfo:{[personInfo]:objMainInfo,},}, this.newEvent);
      this.setState({allPersonalInfoKey:personInfo, allPersonalInfoHash:objMainInfo,}, this.newEvent);
    // }
    // else{
    //   this.setState({disabled:disabled,}, this.announce);
    // }

  }


  newEvent=()=>{
    pageEvents.emit('newPersonWantsToBeAddedToOurBigFamily',this.state.allPersonalInfoKey,this.state.allPersonalInfoHash);
    // this.cleanTheForm();
    // setTimeout(pageEvents.emit('ChangeBody',1), 3000);//переходим на главную

  }

  timetoAct=()=>{
    if( this.state.suchPerson==null){
      this.cleanTheForm();
      setTimeout(pageEvents.emit('ChangeBody',1), 3000);//переходим на главную
    }
    else
    this.setState({  Password:"",     Password2:"",},this.announce);
  }


  disabilityForButtons=()=>{

    if(this.state.Name!=""){
      if(this.state.LastName!=""){
        if(this.state.Mail!=""){
          if(this.state.Password!=""){
            if(this.state.Password2!=""){
              if (this.state.errorName===""){
                if(this.state.errorLastName===""){
                  if(this.state.errorMail===""){
                    if(this.state.errorPassword===""){
                     if(this.state.errorPasswordCheck===""){
      
                         this.setState({disabled:null,}, this.announce);
                    
                    }
                    else {
                      this.setState({disabled:"disabled",}, this.announce);
            
                  }
              
                  }
                  else {
                    this.setState({disabled:"disabled",}, this.announce);
          
                }
      
                }
                else {
                  this.setState({disabled:"disabled",}, this.announce);
        
              }
             
              }
              else {
                this.setState({disabled:"disabled",}, this.announce);
      
            }
      
            }
            else {
              this.setState({disabled:"disabled",}, this.announce);
    
          }
            }
            else {
              this.setState({disabled:"disabled",}, this.announce);
    
          }
          }
          else {
            this.setState({disabled:"disabled",}, this.announce);
  
        }
        }
        else {
          this.setState({disabled:"disabled",}, this.announce);

      }
      }
      else {
        this.setState({disabled:"disabled",}, this.announce);

    }
    }
       
    else {
          this.setState({disabled:"disabled",}, this.announce);

      }
  }

  changeEmailOrPassWord=(num)=>{
    this.setState({suchPerson:num,}, this.timetoAct);
  }



  time=(EO)=>{
    if(EO.charCode==13){
      this.ffocus(EO.target.id);
     }
   }
  
   ffocus=(num)=>{
    let focNextElem;
  
     if(num=="NameId"){
      focNextElem=document.getElementById("LastNameId");
      focNextElem.focus();
     }
     if(num=="LastNameId"){
      focNextElem=document.getElementById("MailId");
      focNextElem.focus();
    }
    if(num=="MailId"){
      focNextElem=document.getElementById("Password");
      focNextElem.focus();
    }
    if(num=="Password"){
      focNextElem=document.getElementById("RePassword");
      focNextElem.focus();
    }
    if(num=="RePassword"){
      focNextElem=document.getElementById("pet");
      focNextElem.focus();
    }
    if(num=="pet"){
      focNextElem=document.getElementById("color");
      focNextElem.focus();
    }
    if(num=="color"){
      if(this.state.disabled==null)
      this.highTimetoAddNewPerson(); 
     }
     
     
    
   }

  render() {
    let valid=<p>Нельзя использовать следующие символы:"&#95;&#94;&#44;&#33;&#45;&#64;&#61;&#60;&#62;&#47;&#42;&#43;&#36;&#38;&#35;</p>;
    let textSPerson=<p  className="error">Такой пользователь уже существует. Попробуйте изменить логин или пароль.</p>
    return (
     <div>
      <div>{this.state.suchPerson==1&& textSPerson}</div>
       <form className="register" onChange={this.disabilityForButtons}>
       <h1>Регистрация</h1>
       <label htmlFor="NameId">Имя</label><br/><br/>
       <input type="text" id="NameId" onKeyPress={this.time}   onChange={this.changeName} value={this.state.Name} placeholder="Валентина"/><span className="error">{this.state.errorName}</span><br/><br/>
       <label htmlFor="LastNameId">Фамилия</label><br/><br/>
       <input type="text" id="LastNameId" onKeyPress={this.time}  onChange={this.changeLastName} value={this.state.LastName} placeholder="Домаринская"/><span className="error">{this.state.errorLastName}</span><br/><br/>
       <p><b>При создании пароля и почты нельзя использовать следующие символы:"!№;%:?*()_-+=".</b></p>

       <label htmlFor="MailId">Электронная почта</label><br/><br/>
       <input type="text" id="MailId" onKeyPress={this.time}  onChange={this.changeMail} value={this.state.Mail} /><span className="error">{this.state.errorMail}</span><br/><br/>
       <label htmlFor="Password">Пароль</label><br/><br/>
       <input type="password" id="Password"  onKeyPress={this.time}  onChange={this.changePassword} value={this.state.Password}/><span className="error">{this.state.errorPassword}</span><span className="error">{this.state.errorPasswordCheck}</span><br/><br/>
       {this.state.errorVV==1&&valid}
       <label htmlFor="RePassword">Подтвердите пароль</label><br/><br/>
       <input type="password" id="RePassword" onKeyPress={this.time}   onChange={this.toequalPasswords} value={this.state.Password2} /><span className="error">{this.state.errorPasswordCheck}</span><br/><br/>
       {this.state.errorVV==1&&valid}
       <h3>Дополнительная информация для восстановления доступа к аккаунту</h3>

      <label htmlFor="pet">Введите имя первого домашнего питомца</label><br/><br/><input type="text" id="pet" onKeyPress={this.time}   onChange={this.pet} value={this.state.pet}/> <span className="error">{this.state.errorpet}</span><br/><br/>
      <label htmlFor="color">Введите ваш любимый цвет</label><br/><br/><input type="text" id="color" onKeyPress={this.time} onChange={this.color}   value={this.state.color}/> <span className="error">{this.state.errorcolor}</span><br/><br/>
      

      </form>
      <div className="Top_Buttons">
       <input type="button" value="Зарегистрироваться" /*testPrR1={this.state.typeTestB}*/  id="FirstR"onClick={this.highTimetoAddNewPerson}  disabled={this.state.disabled}/>
       <input type="button" value="Сбросить все" /*testPrR2={this.state.typeTestB}*/ id="SecR" onClick={this.cleanTheForm}/>
      </div>
      
     </div>
    );

  }

}

export default Registration;
