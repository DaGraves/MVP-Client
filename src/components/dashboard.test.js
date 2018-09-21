import React from 'react';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

import Dashboard from './dashboard';
import store from '../store';

describe('<Dashboard/>', () => {
    it('Renders without crashing', () => {
        shallow(<Dashboard store={store}/>);
    });
});