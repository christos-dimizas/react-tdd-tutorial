import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


// Behavior Driven Development. Organize relevant tests.
describe('App', () => {
    const app = shallow(<App />);

    it('Renders Correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('Initializes the "state" with an empty list of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    });

    describe('When clicking the "add-gift" button', () => {
        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        });
        it('Adds a new gift to "state"', () => {
            expect(app.state().gifts).toEqual([{id: 1}]);
        });

        it('Adds a new gift to the rendered list', () => {
            expect(app.find('.gift-list').children().length).toEqual(1); // 2 because of  (clicked on the above test too)
        });
        // This removes test pollution issues.
        afterEach(() => {
            app.setState({gifts: []});
        });
    });
});
