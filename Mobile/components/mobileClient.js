import React from 'react';
import PropTypes from 'prop-types';

import './mobileClients.css';

import {clientEvents} from './events';

class MobileClient extends React.PureComponent {

  static propTypes = {
   info:PropTypes.object,
  };

  state = {
    info:this.props.info,
   /* f: this.props.info.f,
    n: this.props.info.n,
    MN: this.props.info.MN,
    balance: this.props.info.balance,*/
    
  };

  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient info="+this.props.info+" componentWillReceiveProps");
    this.setState({info:newProps.info});
  };
 
   edit=(EO)=>{
    clientEvents.emit('EditClicked',this.props.info.id);
   };

   delete=(EO)=>{
    clientEvents.emit('DeleteClicked',this.props.info.id);
   };

  render() {

    let status=this.state.info.balance>0?"active":"blocked"
    console.log("MobileClient id="+this.props.info.id+" render");
    
    return (
      <tr className='MobileClient'>
        <td className='MobileClientFIO'>{this.state.info.f}</td>
        <td className='MobileClientFIO'>{this.state.info.n}</td>
        <td className='MobileClientFIO'>{this.state.info.MN}</td>

        <td className='MobileClientBalance'>{this.state.info.balance}</td>
        <td className={status}>{status}</td>
        <td className='MobileClientFIO'><input type="button" value="Редактировать" onClick={this.edit} /></td>
        <td className='MobileClientFIO'><input type="button" value="Удалить" onClick={this.delete} /></td>

  
      </tr>
    );

  }

}

export default MobileClient;
