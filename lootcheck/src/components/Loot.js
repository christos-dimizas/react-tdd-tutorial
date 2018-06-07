import React from 'react';
import {connect} from 'react-redux';
import {fetchBitCoin} from '../actions/bitcoin';

export class Loot extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchBitCoin();
    }

    computeBitcoin() {
        const {bitCoin} = this.props;
        if(Object.keys(bitCoin).length === 0) return '';

        return this.props.balance / parseInt(bitCoin.bpi.USD.rate.replace(',', ''), 10);
    }

    render() {
        return (
            <h3>Bitcoin balance: {this.computeBitcoin()}</h3>
        );
    }
}

export default connect(state => state, {fetchBitCoin})(Loot);