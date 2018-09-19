import React from 'react';
import {shallow} from 'enzyme';

import WorkoutForm from './workout-form';

describe('<WorkoutForm/>', () => {
    it('Renders without crashing', () => {
        shallow(<WorkoutForm/>);
    });
});