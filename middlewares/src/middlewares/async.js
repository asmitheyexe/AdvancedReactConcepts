// re-create redux-promise middleware to get a better understanding to how this works.
// syntax will look W I L D
// triple function syntax is how to make middlewares

// refactored version
export default ({dispatch}) => next => action => {
    // check if the action payload is a promise
    // if no payload or no action then forward it to the next middleware
    if(!action.payload || !action.payload.then){
        return next(action);
    }
    // if promise then wait for resolve
    action.payload.then(function(response){
        const newAction = {...action,payload:response}
        dispatch(newAction);
    });
    
}
    
/*
    What is dispatch
    action -> dispatch -> middlewares -> reducers
*/

/* original version - 
export default function({dispatch}){ // destructure the dispatch function from redux
    return function(next){ // next obj is the next middleware to go to if one exists
        return function(action){ // action from our redux actions
            
            
        }
    }
}

// refactored version which is equivelent to above
export default ({dispatch}) => next => action => {}


*/