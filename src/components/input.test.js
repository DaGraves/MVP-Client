import React from 'react';
import {shallow} from 'enzyme';

import Input from './input';
import store from '../store';

const meta = {

};

const input = {
    name: 'test'
}

const label = 'test';
const type = 'text';



describe('<Input/>', () => {
    it('Renders without crashing', () => {
        shallow(<Input store={store} meta={meta} input={input} label={label} type={type} />);
    });
});