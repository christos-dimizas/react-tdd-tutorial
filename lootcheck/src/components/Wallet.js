import React from 'react';
import {connect} from 'react-redux';
import { deposit, withdraw } from '../actions/balance';

export class Wallet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: null,
        }
    }

    updateBalance = event => this.setState({balance: parseInt(event.target.value, 10)});
    deposit = () => this.props.deposit(this.state.balance);
    withdraw = () => this.props.withdraw(this.state.balance);

    render() {
        return (
            <div>
                <h2 className="balance">Wallet Balance: {this.props.balance}</h2>
                <br />
                <input className="input-wallet" onChange={this.updateBalance}/>
                <button className="btn-deposit" onClick={this.deposit}>Deposit</button>
                <button className="btn-withdraw" onClick={this.withdraw}>Withdraw</button>
            </div>
        );
    }
}

export default connect(state => {return {balance: state}}, {deposit, withdraw})(Wallet);