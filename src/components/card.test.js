import React from 'react';
import {shallow, mount} from 'enzyme';

import Card from './card';

describe('<Card/>', () => {
    it('Renders without crashing', () => {
        shallow(<Card />);
    });

    it('Props is no undefined', () => {
        const wrapper = shallow(<Card
            name="Test"
            date="07/12/18"
            exerciseType="Running"
            exerciseTime="30"
            caloriesburned="345"
            notes="testNotes" />);
        expect(wrapper.find('div.card-container').text()).toEqual(
            'Workout Name: Test Date: 07/12/18 Exercise: Running Time: 30 minutes Calories Burned:  Notes: testNotesDelete'
        );
    });
    
    it('Calls a prop handleClick on button click', () => {
        const callback = jest.fn();
        const wrapper = mount(<Card handleClick={callback}/>)
        wrapper.find('button').simulate('click');
        expect(callback).toBeCalled();
    })
});