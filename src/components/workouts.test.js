import React from 'react';
import {shallow} from 'enzyme';

import Workouts from './workouts';
import store from '../store';

describe('<Workouts/>', () => {
    it('Renders without crashing', () => {
        shallow(<Workouts store={store} />);
    });
});