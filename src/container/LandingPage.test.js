import App from '../App';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage';

describe('LangingPage', () => {
    let component;

    beforeEach(() => {
        component = shallow(<LandingPage />); 
    });

    test('Renders page', () => {
        expect(component).toExist;
    });

    test("Check h1 content", () => {
        expect(component.find("h1").text()).toBe("Hello there!");
    });

    test("Check instruction is there", () => {
        expect(component.find("p").text()).toExist; 
    });

    it('includes link to homepage', () => {                                       
        expect(component.find("NavLink")).toBeTruthy();
    });

});