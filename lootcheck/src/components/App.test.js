import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    const app = shallow(<App />);

    it('Renders Correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('contains a wallet component', () => {
        // console.log(app.debug());
        expect(app.find('Connect(Wallet)').exists()).toBe(true);
    })
});