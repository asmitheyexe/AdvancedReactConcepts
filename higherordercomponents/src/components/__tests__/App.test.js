import React from 'react';
import {shallow} from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
/**
 * Global test function : it
 *      use: it(description of test, function containing the test logic)
 *      example: it('test if boots', () =>{
 *                    //test code in this block
 *               });
 * 
 * in Junit we us Assertions like assertTrue or assertFalse assertEquals
 * Jest we use expect
 *      expect()
 *      use: expect(element to test).someMatcherFunction(values we expect to be in it);
 *      some matcher functions: 
 *              .toContain(Argument to check if is contained) - Tests if the element in expect arg contains a certain value
 *              .toBeTruthy(no args) - determines true or false 
 *              .toEqual(arg) - determins of left equals the argument to this matcher
 *              more matchers can be found : https://jestjs.io/docs/en/using-matchers
 * 
 * to run tests simply 'npm test'
 */

// JEST helper function
// Acts like JUnit @Before annotation. This function runs before each test
// set our wrapped component to global for Testing
let wrapped;
beforeEach(() => {
    // use the shallow function from Enzyme library to test our components
    wrapped = shallow(<App />);
});
// read this as it shows a comment box. 
// what is it? think of the name of the file. 
// So App shows a comment box
it('shows a comment box', () => {
    // .find in enzyme returns a array of instances of that component found in the App component in this example
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
    // .find in enzyme returns a array of instances of that component found in the App component in this example
    expect(wrapped.find(CommentList).length).toEqual(1);
});

