import React from 'react';
import {shallow} from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {
    const gift = shallow(<Gift />);

    it('renders properly', () =>{
        expect(gift).toMatchSnapshot();
    });

    it('Initializes a person and a present in "state"', () => {
        expect(gift.state()).toEqual({person: '', present: ''});
    });

    describe('When typing into the person input', () => {
        const person = 'Uncle';
        beforeEach(() => {
            gift.find('.input-person').simulate('change', {target: {value: person}});
        });

        it('Updates the person\'s "state"' , () => {
            expect(gift.state().person).toEqual(person);
        });
    });
});