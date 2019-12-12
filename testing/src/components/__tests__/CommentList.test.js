import React from 'react';
import {mount} from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;
beforeEach(() => {
    const initialState = {
        comments: ['comment 1', 'comment 2']
    };

    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
});

it('creates one LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
});

// checking text https://airbnb.io/enzyme/docs/api/ReactWrapper/text.html enzyme actually recomends using render function
// enzyme .render() https://airbnb.io/enzyme/docs/api/ReactWrapper/render.html
it('check each comment for content', () => {
    expect(wrapped.render().text()).toContain('comment 1');
    expect(wrapped.render().text()).toContain('comment 2');
});