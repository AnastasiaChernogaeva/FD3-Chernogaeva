import React from 'react';
import PropTypes from 'prop-types';

import './mobileClients.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    id: PropTypes.number.isRequired,
    f: PropTypes.string.isRequired,
    n: PropTypes.string.isRequired,
    MN: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
  };

  state = {
    f: this.props.f,
    n: this.props.n,
    MN: this.props.MN,
    balance: this.props.balance,
    
  };

  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient id="+this.props.id+" componentWillReceiveProps");
    this.setState({balance:newProps.balance});
  };
 
   edit=()=>{

   }

   delete=()=>{
       
   }

  render() {

    let status=this.state.balance>0?"active":"blocked"
    console.log("MobileClient id="+this.props.id+" render");
    
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
