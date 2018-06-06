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
        const id = 1;
        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        });
        // This removes test pollution issues.
        afterEach(() => {
            app.setState({gifts: []});
        });

        //
        it('Adds a new gift to "state"', () => {
            expect(app.state().gifts).toEqual([{id: 1}]);
        });

        //
        it('Adds a new gift to the rendered list', () => {
            expect(app.find('.gift-list').children().length).toEqual(id); // 2 because of  (clicked on the above test too)
        });

        //
        it('Creates a Gift component', () => {
            expect(app.find('Gift').exists()).toEqual(true);
        });

        describe('And when user wants to remove the added gift', () => {
            beforeEach(() => {
                app.instance().removeGift(id);
            });

            it('Removes the gift from "state"', () => {
                expect(app.state().gifts).toEqual([]);
            })
        });
    });
});
