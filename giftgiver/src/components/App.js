import React from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';
import {max_number} from '../helper';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gifts: [],
        };
    }

    addGift = () => {
        const {gifts} = this.state;
        const ids = this.state.gifts.map(gift => gift.id);
        gifts.push({id: max_number(ids) + 1});
        this.setState({gifts});
    };

    removeGift = (id) => {
        const gifts = this.state.gifts.filter(gift => gift.id !== id);
        this.setState({gifts});
    };

    render () {
        return (
        <div className="gift">
            <h2>Gift Giver</h2>
            <div className="gift-list">
                {this.state.gifts.map(gift => (
                    <Gift
                        key={gift.id}
                        gift={gift}
                        removeGift={this.removeGift}
                    />
                ))}
            </div>

            <Button
                className="btn-add"
                onClick={this.addGift}
            >
                Add Gift
            </Button>
        </div>
        )
    }
}
