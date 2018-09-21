import React from 'react';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

import WorkoutForm from './workout-form';

describe('<WorkoutForm/>', () => {
    it('Renders without crashing', () => {
        shallow(<WorkoutForm/>);
    });
});