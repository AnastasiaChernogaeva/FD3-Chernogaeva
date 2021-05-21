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



  add=()=>{};
  cancel=()=>{};

  render() {

    let status=this.state.balance>0?"active":"blocked"
    console.log("MobileClient id="+this.props.id+" render");
    


    return (
        <div> 
        <h2>Новый клиент</h2>

      <label className='id'><b>ID:</b>{this.props.items.length+5}</label> <br/>
      <label htmlFor="LastName"><b>Фамилия:</b></label> <input type="text" id="LastName" ref></input> <br/>
      <label htmlFor="Name"><b>Имя:</b></label> <input type="text" id="Name" ></input> <br/>
      <label htmlFor="MiddleName"><b>Отчество:</b></label> <input type="text" id="MiddleName" ></input> <br/>
      <label htmlFor="Balance"><b>Баланс:</b></label> <input type="number" id="Balance" ></input><br/>

    <input  type="button" defaultValue="Добавить"  onClick={this.add}  disabled={this.state.buttonAdd?"disabled":null} />
    <input  type="button" defaultValue="Закончить" onClick={this.cancel}/>

  </div>
  );

  }

}

export default MobileClient;
