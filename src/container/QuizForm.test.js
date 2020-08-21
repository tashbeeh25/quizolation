
import { shallow } from 'enzyme';
import QuizForm from './QuizForm';

describe('QuizForm', () => {
    let component;

    beforeEach(() => {
        component = shallow(<QuizForm />); 
    });

    test('Renders page', () => {
        expect(component).toExist;
    });

    test("Check Quiz-Form-container exists", () => {
        expect(component.find("Quiz-Form-container")).toExist;
    });
    
    it('should render InputPage componeent', () => {
        const wrapper = shallow(<QuizForm  />); 
        expect(wrapper.exists('InputPage')).toEqual(true);
    });


});