import React from 'react';
import {shallow} from 'enzyme';

import HeaderBar from './header-bar';
import store from '../store';

describe('<HeaderBar/>', () => {
    it('Renders without crashing', () => {
        shallow(<HeaderBar store={store}/>);
    });
});