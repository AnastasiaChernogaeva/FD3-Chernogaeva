import React from 'react';
import PropTypes from 'prop-types';

import './mobileClients.css';

import {clientEvents} from './events';


class NewElemForm extends React.PureComponent {

  static propTypes = {
    clients:PropTypes.array.isRequired
  };

  state = {
    clients: this.props.clients,
    
  };
/*
  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient id="+this.props.id+" componentWillReceiveProps");
    this.setState({balance:newProps.balance});
  };*/



  add=(EO)=>{
      if(this.lastNameRef.value!=null){
        if(this.nameRef.value!=null){
            if(this.middleNameRef.value!=null){
                if(this.balanceRef.value!=null){
                  let newclient={"id":this.state.clients.length+5, "f":this.lastNameRef.value, "n":this.nameRef.value, "MN":this.middleNameRef.value, "balance":this.balanceRef.value};
                  clientEvents.emit('NewElemAdd',newclient);

                }
            }
        }
      }
  };
  cancel=(EO)=>{
    clientEvents.emit('Cancel',0);
  };

  lastNameRef=null;
  setNewLastName=(ref)=>{
    this.lastNameRef=ref;
  }

  nameRef=null;
  setNewName=(ref)=>{
    this.nameRef=ref;
  }

  middleNameRef=null;
  setNewMiddleName=(ref)=>{
    this.middleNameRef=ref;
  }

  balanceRef=null;
  setBalance=(ref)=>{
    this.balanceRef=ref;
  }
  render() {

    let status=this.state.balance>0?"active":"blocked"
   /* console.log("MobileClient id="+this.props.id+" render");*/
    


    return (
        <div> 
        <h2>Новый клиент</h2>

      <label className='id'><b>ID:</b>{this.props.clients.length+101}</label> <br/>
      <label htmlFor="LastName"><b>Фамилия:</b></label> <input type="text" id="LastName" ref={this.setNewLastName}></input> <br/>
      <label htmlFor="Name"><b>Имя:</b></label> <input type="text" id="Name"  ref={this.setNewName} ></input> <br/>
      <label htmlFor="MiddleName"><b>Отчество:</b></label> <input type="text" id="MiddleName"  ref={this.setNewMiddleName}></input> <br/>
      <label htmlFor="Balance"><b>Баланс:</b></label> <input type="number" id="Balance" ref={this.setBalance}></input><br/>

    <input  type="button" defaultValue="Добавить"  onClick={this.add}  />
    <input  type="button" defaultValue="Закончить" onClick={this.cancel}/>

  </div>
  );

  }

}

export default NewElemForm;
