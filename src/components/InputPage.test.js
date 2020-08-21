import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import InputPage from './InputPage';

describe('<Form />', () => {

    it('should render a form', () => {
        const wrapper = shallow(<InputPage />); 
        expect(wrapper.exists('form')).toEqual(true);
    })

    it('should have 3 select options', () => {
        const wrapper = shallow(<InputPage />); 
        expect(wrapper.find('select').length).toEqual(2);
    })

    it('On change the value should change', () => {
        const wrapper = mount(<BrowserRouter><InputPage /></BrowserRouter>); 
        wrapper.find('select').at(0).simulate('change', { target: { name: 'playersNumber', value: "easy" } });
        expect(wrapper.find('select').at(0).prop('value')).toEqual("easy");
    })

});


