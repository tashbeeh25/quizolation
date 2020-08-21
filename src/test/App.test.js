import App from '../App';
import { shallow } from 'enzyme';
import Navbar from '../components/Navbar';
import { Route } from 'react-router-dom';

describe('App', () => {
    let wrapper, navlink, Switch;

    beforeEach(() => {
        wrapper = shallow(<App />); 
        navlink = wrapper.find("NavLink"); 
        Switch = wrapper.find("Switch")
    });

    test('Renders app', () => {
        expect(wrapper).toExist;
    });

    test('Navbar to exist', () => {
        expect(navlink).toExist; 
    })

    test('Switch to exist', () => {
        expect(Switch).toExist; 
    }); 

    test("Check h1 to exist", () => {
      
        expect(wrapper.find("h1")).toExist;
    });
    
    //   test('contains Routes', () => {
    //     expect(wrapper.containsMatchingElement(<Route />)).toEqual(true);
    //   });

    //   test('contains 5 Routes', () => {
    //     expect((wrapper.find('Route').length)).toEqual(4);
    //   });
    

});