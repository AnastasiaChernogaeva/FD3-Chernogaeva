import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './mobileClient';
import NewElemForm from './newone';
import EditClient from './mobileEdit';

import './mobile.css';

import {clientEvents} from './events';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients:PropTypes.array
 
  };

  state = {
    clients:this.props.clients,
    name: this.props.name,
    clientsMode:0,
    viewMode:0,
    forallId:0,
  };


  /*подписка на события */
  componentDidMount = () => {
    clientEvents.addListener('EditClicked',this.edit);
    clientEvents.addListener('DeleteClicked',this.delete);
    clientEvents.addListener('NewElemAdd',this.add);
    clientEvents.addListener('Cancel',this.close);
    clientEvents.addListener('EditElemAdd',this.save);

  };

  componentWillUnmount = () => {
    clientEvents.removeListener('EditClicked',this.edit);
    clientEvents.removeListener('DeleteClicked',this.delete);
    clientEvents.removeListener('NewElemAdd',this.add);
    clientEvents.removeListener('Cancel',this.close);
    clientEvents.removeListener('EditElemAdd',this.save);


  };

  
  /*shouldComponentUpdate = (newProps,newState) => {
    return (newProps!=this.props)||(newState!=this.state);
  };*/
  /*componentWillReceiveProps = (newProps) => {
    console.log("MobileClient info="+this.props.info+" componentWillReceiveProps");
    if(this.state.info!=newProps.info)
    this.setState({info:newProps.info});
  };*/



/*имя компании*/
  setName1 = () => {
    this.setState({name:'МТС', 
    clientsMode:0,
    viewMode:0,
    forallId:0,});
  };

  setName2 = () => {
    this.setState({name:'Velcom',
    clientsMode:0,
    viewMode:0,
    forallId:0,});
  };
  
 

  cClients=this.state.clients;


/*статус клиентов(все, заблокированные, активные) */
showAll=()=>{
  let filteredClients=this.cClients.slice();
  this.setState({clients:filteredClients, clientsMode:0 },this.change);  
   /*this.setState({clientsMode:0,}, this.change);*/
}

onlyActive=()=>{
  let filteredClients
  if(this.state.clientsMode==0){
   filteredClients=this.state.clients.filter(client=>
    client.balance>=0);
  }
  else{
     filteredClients=this.cClients.filter(client=>
      client.balance>=0);
  }
  this.setState({clients:filteredClients, clientsMode:1, },this.change);  
 /*  this.setState({clientsMode:1,}, this.change);*/
}

onlyBlocked=()=>{
  let filteredClients
  if(this.state.clientsMode==0){
   filteredClients=this.state.clients.filter(client=>
    client.balance<=0);
  }
  else{
     filteredClients=this.cClients.filter(client=>
      client.balance<=0);
  }
  this.setState({clients:filteredClients, clientsMode:2,},this.change);  
  /*this.setState({clientsMode:2,}, this.change);*/
}




  
change=()=>{
    console.log("New state leads to new render");
}




/*новый элемент */
newClient=()=>{
    this.setState({viewMode:1,},this.change);
};

add=(a)=>{
 /* let cClients=this.state.clients;*/
this.cClients.push(a);
  this.setState({viewMode:0, clients:this.cClients, }, this.change);
};




close=(v)=>{
  this.setState({viewMode:v,}, this.change);
}





/*редактирование элемента */
edit=(id)=>{
  this.setState({viewMode:2, forallId:id,},this.change);
};

save=(a)=>{
 /* let cClients=this.state.clients;*/
 this.cClients=this.cClients.map(client=> (client.id==a.id)?a:client);
  this.setState({clients:this.cClients, viewMode:0, forallId:0, }, this.change);
};




/*удаление элемента */
delete=(id)=>{
 /* let cClients=this.state.clients;*/
 this.cClients=this.cClients.filter(elem=>
    elem.id!=id);

  this.setState({clients:this.cClients, forallId:0, viewMode:0,},this.change);  
};





  render() {

    console.log("MobileCompany render");
      
 

      var clientsCodeAll=this.state.clients.map( client =>
      <MobileClient key={client.id} info={client}  />
       );
 
       /* var clientsCodeActive=this.state.clients.map(client =>
       client.balance>=0?(<MobileClient key={client.id} info={client}/>):null);
       
       var clientsCodeBlocked=this.state.clients.map(client =>
       client.balance<=0?(<MobileClient key={client.id} info={client}/>):null);
 */
       

  
    var newElem=<NewElemForm clients={this.state.clients}></NewElemForm>;

    let editClient=this.state.clients.find((elem,) => (this.state.forallId==elem.id));
    var editElem=<EditClient client={editClient}></EditClient>;

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
            {/*     {this.state.clientsMode==0 && clientsCodeAll}
               {this.state.clientsMode==1 && clientsCodeActive}
                {this.state.clientsMode==2 && clientsCodeBlocked} */}
                {clientsCodeAll}
          
          </tbody>
        </table>

        <input type="button" value="Добавить клиента" onClick={this.newClient} />
 
           {this.state.viewMode==1 && newElem}
           {this.state.viewMode==2 && editElem}
      </div>
    )
    ;

  }

}

export default MobileCompany;
