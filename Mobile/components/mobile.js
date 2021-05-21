import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './mobileClient';
import NewElemForm from './newone';

import './mobile.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        f: PropTypes.string.isRequired,
        n: PropTypes.string.isRequired,
        MN: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    clients:this.props.clients,
    name: this.props.name,
    clients: this.props.clients,
    clientsMode:0,
    viewMode:0,
  };

  setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };
  
 /* setBalance = (clientId,newBalance) => {
    let newClients=this.state.clients;
    newClients.forEach( c => {
      if ( c.id==clientId )
        c.balance=newBalance;
    } );
    this.setState({clients:newClients});
  };

  setBalance1 = () => {
    this.setBalance(105,230);
  };

  setBalance2 = () => {
    this.setBalance(105,250);
  };*/

showAll=()=>{
    this.setState({clientsMode:0,}, this.change);
}

onlyActive=()=>{
    this.setState({clientsMode:1,}, this.change);
}

onlyBlocked=()=>{
    this.setState({clientsMode:2,}, this.change);
}
  
change=()=>{
    console.log("New state leads to new render");
}


newClient=()=>{
    this.setState({viewMode:1,},this.change);
}

  render() {

    console.log("MobileCompany render");

    var clientsCodeAll=this.state.clients.map( client =>
      <MobileClient key={client.id} info={client}  />
    );
    var clientsCodeActive=this.state.clients.filter( client =>{ (client.balance>0)?<MobileClient key={client.id} info={client} />:null}
      );
    var clientsCodeBlocked=this.state.clients.map( client =>{ (client.balance<0)?<MobileClient key={client.id} info={client} />:null}
      );

    var newElem=<NewElemForm clients={this.state.clients}></NewElemForm>;

    return (
      <div className='MobileCompany'>
        <input type="button" value="МТС" onClick={this.setName1} />
        <input type="button" value="Velcom" onClick={this.setName2} />
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <hr/>
        <input type="button" value="Все" onClick={this.showAll} />
        <input type="button" value="Активные" onClick={this.onlyActive} />
        <input type="button" value="Заблокированные" onClick={this.onlyBlocked} />
        <hr/>
        <hr/>
        <table className='MobileCompanyClients'>
            <tbody>
                <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th>Статус</th>
                    <th>Редактировать</th>
                    <th>Удалить</th>
                </tr>
                {this.state.clientsMode==0 && clientsCodeAll}
                {this.state.clientsMode==1 && clientsCodeActive}
                {this.state.clientsMode==2 && clientsCodeBlocked}
          {clientsCode}
          </tbody>
        </table>

        <input type="button" value="Добавить клиента" onClick={this.newClient} />
 
           {this.state.viewMode==1 && newElem}
      </div>
    )
    ;

  }

}

export default MobileCompany;
