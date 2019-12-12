import React from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

/**
 * Functional component exported as default
 */
export default () =>{
    return(
        <div>
            <CommentBox />
            <CommentList />
        </div>
    );
};

