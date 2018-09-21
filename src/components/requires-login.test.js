import React from 'react';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

import RequiresLogin from './requires-login';

describe('<RequiresLogin/>', () => {
    it('Renders without crashing', () => {
        shallow(<RequiresLogin />);
    });
});