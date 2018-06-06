import React from 'react';
import { Button } from 'react-bootstrap';

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
        const maxId = ids.length > 0 ? Math.max(...ids) : 0;
        gifts.push({id: maxId + 1});
        this.setState({gifts});
    };

    render () {
        return (
        <div>
            <h2>Gift Giver</h2>
            <div className="gift-list">
                {this.state.gifts.map(gift => <div key={gift.id}>{gift.id}</div>)}
            </div>
            <Button
                className="btn-add"
                onClick={this.addGift}
            >Add Gift</Button>
        </div>
        )
    }
}