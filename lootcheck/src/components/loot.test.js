import React from 'react';
import {shallow, mount} from 'enzyme';
import {Loot} from './Loot';

describe('Loot', () => {
    let props = {balance: 10, bitCoin: {}};
    const mockFetchBitCoin = jest.fn();
    let loot = shallow(<Loot {...props}/>);

    it('renders properly', () => {
        expect(
            loot
        ).toMatchSnapshot();
    });

    describe('when mounted', () => {
        beforeEach(() => {
            props.fetchBitCoin = mockFetchBitCoin;
            loot = mount(<Loot {...props}/>);
        });

        it('dispatches the "fetchBitCoin()" method it receives from props', () => {
            expect(
                mockFetchBitCoin
            ).toHaveBeenCalled();
        });
    });

    describe('when there are valid bitcoin props', () => {
        beforeEach(() => {
            props = {balance: 10, bitCoin: { bpi: {USD: {rate: '1,000'}}}};
            loot = shallow(<Loot {...props}/>);
        });

        it('displays the correct bitcoin value', () => {
            expect(
                loot.find('h3').text()
            ).toEqual('Bitcoin balance: 0.01');
        });
    });
});