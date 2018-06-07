import React from 'react';
import {connect} from 'react-redux';

export class Wallet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2 className="balance">Wallet Balance: {this.props.balance}</h2>
            </div>
        );
    }
}

export default connect(state => {balance: state}, null)(Wallet);