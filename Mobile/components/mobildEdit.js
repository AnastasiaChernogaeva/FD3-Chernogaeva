import React from 'react';
import PropTypes from 'prop-types';

import './mobileClients.css';

class EditClient extends React.PureComponent {

  static propTypes = {
    client:PropTypes.object.isRequired
  };

  state = {
    client: this.props.client,
    
  };

  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient id="+this.props.id+" componentWillReceiveProps");
    this.setState({balance:newProps.balance});
  };



  save=(EO)=>{
      if(this.lastNameRef.value!=null){
        if(this.nameRef.value!=null){
            if(this.middleNameRef.value!=null){
                if(this.balanceRef.value!=null){
                  let editClient={"id":this.props.client.id, "f":this.lastNameRef.value, "n":this.nameRef.value, "MN":this.middleNameRef.value, "balance":this.balanceRef.value};
                  clientEvents.emit('EditElemAdd',editClient);

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
    console.log("MobileClient id="+this.props.id+" render");
    


    return (
        <div> 
        <h2>Новый клиент</h2>

      <label className='id'><b>ID:</b>{this.props.client.id}</label> <br/>
      <label htmlFor="LastName"><b>Фамилия:</b></label> <input type="text" id="LastName" ref={this.setNewLastName} defaultValue={this.state.client.f}></input> <br/>
      <label htmlFor="Name"><b>Имя:</b></label> <input type="text" id="Name"  ref={this.setNewName} defaultValue={this.state.client.n}></input> <br/>
      <label htmlFor="MiddleName"><b>Отчество:</b></label> <input type="text" id="MiddleName"  ref={this.setNewMiddleName} defaultValue={this.state.client.MN}></input> <br/>
      <label htmlFor="Balance"><b>Баланс:</b></label> <input type="number" id="Balance" ref={this.setBalance} defaultValue={this.state.client.balance}></input><br/>

    <input  type="button" defaultValue="Добавить"  onClick={this.save}  />
    <input  type="button" defaultValue="Закончить" onClick={this.cancel}/>

  </div>
  );

  }

}

export default MobileClient;
