import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// VERY IMPORTANT FOR ENZYME TESTING
// this file name MUST be setupTest.js
// This will connect Enzyme to our react project
Enzyme.configure({adapter : new Adapter()});