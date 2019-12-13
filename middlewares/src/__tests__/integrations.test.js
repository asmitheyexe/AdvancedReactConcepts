import React from 'react';
import {mount} from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';
// Testing stuff with API calls (network latency)

beforeEach(() =>{
    moxios.install(); // init moxios to intercept axios
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'fetched 1'},{ name:'fetched 2'}]
    }); // first param is the URL request to watch for, 2nd param is a response back to the axios request
});

afterEach(() => {
    moxios.uninstall(); // clean up moxios calls for future tests, we dont want to accidently intercept other tests 

});

// introduce callback 
it('use axios to fetch comments from api', (done) => {
    // Attempt to render the whole app
    const wrapped = mount(
        <Root >
            <App />
        </Root>
    );
    
    wrapped.find('.fetch-comments').simulate('click');

    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done(); // tell JEST to wait until done() is called
        wrapped.unmount();
    });

});