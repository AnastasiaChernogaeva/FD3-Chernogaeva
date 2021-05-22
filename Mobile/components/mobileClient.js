import React from 'react';
import PropTypes from 'prop-types';

import './mobileClients.css';

import {clientEvents} from './events';

class MobileClient extends React.PureComponent {

  static propTypes = {
   info:PropTypes.object,
  };

  state = {
    f: this.props.info.f,
    n: this.props.info.n,
    MN: this.props.info.MN,
    balance: this.props.info.balance,
    
  };
/*
  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient id="+this.props.id+" componentWillReceiveProps");
    this.setState({balance:newProps.balance});
  };
 */
   edit=(EO)=>{
    clientEvents.emit('EditClicked',this.props.info.id);
   };

   delete=(EO)=>{
    clientEvents.emit('DeleteClicked',this.props.info.id);
   };

  render() {

    let status=this.state.balance>0?"active":"blocked"
    console.log("MobileClient id="+this.props.info.id+" render");
    
    return (
      <tr className='MobileClient'>
        <td className='MobileClientFIO'>{this.state.f}</td>
        <td className='MobileClientFIO'>{this.state.n}</td>
        <td className='MobileClientFIO'>{this.state.MN}</td>

        <td className='MobileClientBalance'>{this.state.balance}</td>
        <td className={status}>{status}</td>
        <td className='MobileClientFIO'><input type="button" value="Редактировать" onClick={this.edit} /></td>
        <td className='MobileClientFIO'><input type="button" value="Удалить" onClick={this.delete} /></td>

  
      </tr>
    );

  }

}

export default MobileClient;
