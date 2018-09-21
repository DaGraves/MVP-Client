import React from 'react';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

import LoginForm from './login-form';

describe('<LoginForm/>', () => {
    it('Renders without crashing', () => {
        shallow(<LoginForm />);
    });
});