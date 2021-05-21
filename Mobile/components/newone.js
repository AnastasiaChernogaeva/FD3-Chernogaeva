import React from 'react';
import PropTypes from 'prop-types';

import './mobileClients.css';

class NewElemForm extends React.PureComponent {

  static propTypes = {
    clients:PropTypes.array.isRequired
  };

  state = {
    clients: this.props.clients,
    
  };

  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient id="+this.props.id+" componentWillReceiveProps");
    this.setState({balance:newProps.balance});
  };



  add=()=>{
      if(this.this.lastNameRef.value!=null){
        if(this.this.nameRef.value!=null){
            if(this.this.middleNameRef.value!=null){
                if(this.this.balanceRef.value!=null){
                    
                }
            }
        }
      }
  };
  cancel=()=>{};

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

      <label className='id'><b>ID:</b>{this.props.items.length+5}</label> <br/>
      <label htmlFor="LastName"><b>Фамилия:</b></label> <input type="text" id="LastName" ref={this.setNewLastName}></input> <br/>
      <label htmlFor="Name"><b>Имя:</b></label> <input type="text" id="Name"  ref={this.setNewName} ></input> <br/>
      <label htmlFor="MiddleName"><b>Отчество:</b></label> <input type="text" id="MiddleName"  ref={this.setNewMiddleName}></input> <br/>
      <label htmlFor="Balance"><b>Баланс:</b></label> <input type="number" id="Balance" ref={this.setBalance}></input><br/>

    <input  type="button" defaultValue="Добавить"  onClick={this.add}  disabled={this.state.buttonAdd?"disabled":null} />
    <input  type="button" defaultValue="Закончить" onClick={this.cancel}/>

  </div>
  );

  }

}

export default MobileClient;
