import React from 'react';
import {shallow} from 'enzyme';
import Footer from '../components/Footer';
import { expectation } from 'sinon';

it ('check telephone number is true', () => {
    const wrapper = mount(<Footer/>);
    const span = wrapper.find("span");
    const result = span.text();

    console.log('tg..span:',span.html());
    
    expect(result).toBe(" 44-7585 351144")
    
} )