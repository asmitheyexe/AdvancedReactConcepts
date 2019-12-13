import React from 'react';
import { mount } from 'enzyme'; // FullDom test from enzyme
import CommentBox from 'components/CommentBox';
import Root from 'Root';
// Testing a react-redux application

// Need to wrap our component with our Provider from redux with the store
// Our Provider lives in Root to give use a easy way to wrap our components we want to test

let wrapped;
beforeEach(() => {
    // use the shallow function from Enzyme library to test our components
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() =>{
    wrapped.unmount();
});

it('has a text area and button', () =>{
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});


// if tests contain simular functionality or set up the same thing we can limit scopes
describe('Setting inputed textarea input',() =>{
    let newValue;
    // we can nest beforeEachs using describe functions
    beforeEach(() =>{
        newValue = "test user input";
        wrapped.find('textarea').simulate('change',{
            target: {value :newValue}
        }); // for event use the HTML event, not the react event, pass in what the event handler expects in our component.
            // since we used event.target.value, we need to add a target attribute to mock
    
        // React does NOT immediatly re-render the component so we can't just check immediatly check for the new value
        // to force update of component https://airbnb.io/enzyme/docs/api/ReactWrapper/update.html
        wrapped.update();
    })


    // testing mocking a HTML event https://airbnb.io/enzyme/docs/api/ReactWrapper/simulate.html
    it('has textarea that accepts user input', () =>{
        // find a specific prop https://airbnb.io/enzyme/docs/api/ReactWrapper/prop.html
        expect(wrapped.find('textarea').prop('value')).toEqual(newValue);
    });


    it('textarea will reset on form submit', () => {
        // set value of our text area to some test value
        // check new value
        expect(wrapped.find('textarea').prop('value')).toEqual(newValue);

        // now simulate form submission
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');

    });

});


