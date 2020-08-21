import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import Question from '../components/Question';
import renderer from 'react-test-renderer';

describe('QuestionPage', () => {

 
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<QuestionPage />);
    });

    // it('should render game page container', () => {
    //     expect(wrapper.find('game-page-container')).toExist;
    // });

})