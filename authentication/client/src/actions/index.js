import axios from 'axios';
import {AUTH_USER,AUTH_ERROR} from './types';

export const signup = (formValues,callback) => async dispatch =>{
    try{
        const response = await axios.post('http://localhost:3090/signup',formValues);
        dispatch({
            type:AUTH_USER,
            payload: response.data.token
        });
        // persist token on refresh using local storage
        localStorage.setItem('jwtToken', response.data.token);
        // route user to feature page
        callback();
    }catch(e){
        dispatch({
            type: AUTH_ERROR, payload:'Email in use'
        });
    }
}

export const signout = () =>{
    localStorage.removeItem('jwtToken');
    return{
        type:AUTH_USER,
        payload: ''
    };
}

export const signin = (formValues,callback) => async dispatch =>{
    try{
        const response = await axios.post('http://localhost:3090/signin',formValues);
        dispatch({
            type:AUTH_USER,
            payload: response.data.token
        });
        // persist token on refresh using localstorage
        localStorage.setItem('jwtToken', response.data.token);
        // route user to feature page
        callback();
    }catch(e){
        dispatch({
            type: AUTH_ERROR, payload:'Invalid Credentials'
        });
    }
}
// normal flow
/**
 * Action Creator - produces a action
 * MiddleWares - Takes action maybe does stuff with it
 * Reducers - Does stuff based on action
 * 
 */

 /* // redux thunk implementation
    // normally you would return a { type: '', payload: ''}
    // redux thunk allows us to return a function that gets passed the redux
    // dispatch obj
    // redux thunk allows us to dispatch multiple actions per action creator
export const signup = ({email,password}) => {
    return function(dispatch){
    }
}

    refactored
export const signup = ({email,password}) => dispatch =>{
        
}
  * 
  * 
  */