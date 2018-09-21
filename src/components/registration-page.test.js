import React from 'react';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

import RegistrationPage from './registration-page';
import store from '../store';


describe('<RegistrationPage/>', () => {
    it('Renders without crashing', () => {
        shallow(<RegistrationPage store={store}/>);
    });
});