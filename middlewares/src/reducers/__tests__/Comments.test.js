import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () =>{
    // create mock action
    const action = {
        type: SAVE_COMMENT,
        payload: 'new Comment'
    };
    // pass action into reducer
    const newState = commentsReducer([], action);
    expect(newState).toEqual(['new Comment']);

});

it('handles actions of unknown action type', () =>{
    // test a garbage action
    const action ={
        type: 'sajfhalf',
        payload: 'asdasd'
    };

    const newState = commentsReducer([], action);
    expect(newState).toEqual([]);
})