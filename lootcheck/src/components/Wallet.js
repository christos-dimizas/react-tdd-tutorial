import React from 'react';
import {connect} from 'react-redux';

export class Wallet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: null,
        }
    }

    updateBalance = event => this.setState({balance: parseInt(event.target.value, 10)});

    render() {
        return (
            <div>
                <h2 className="balance">Wallet Balance: {this.props.balance}</h2>
                <br />
                <input className="input-wallet" onChange={this.updateBalance}/>
            </div>
        );
    }
}

export default connect(state => {return {balance: state}}, null)(Wallet);