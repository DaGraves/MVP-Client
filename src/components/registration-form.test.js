import React from 'react';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

import RegistrationForm from './registration-form';

describe('<RegistrationForm/>', () => {
    it('Renders without crashing', () => {
        shallow(<RegistrationForm />);
    });
});