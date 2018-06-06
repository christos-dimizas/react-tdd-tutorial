import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

//
it('Renders Correctly', () => {
    expect(app).toMatchSnapshot();
});

it('Initializes the "state" with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
});

it('Adds a new gift to "state" when clicking the "add gift" button', () => {
    app.find('.btn-add').simulate('click');
    expect(app.state().gifts).toEqual([{id: 1}]);
});

it('Adds a new gift to the rendered list when clicking the "Add Gift" button', () => {
    app.find('.btn-add').simulate('click');
    expect(app.find('.gift-list').children().length).toEqual(2); // 2 because of test pollution (clicked on the above test too)
});