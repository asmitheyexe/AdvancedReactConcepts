import React, { Component } from 'react'
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';
import * as actions from '../../actions';
class Signin extends Component{

    onFormSubmit = (formProps) =>{
        this.props.signin(formProps, () => {
            this.props.history.push('/feature')
        });
    }

    render(){
        // destructure handleSubmit from reduxForms
        const {handleSubmit} = this.props;

        return(
            <form onSubmit={handleSubmit(this.onFormSubmit)}>
                <fieldset>
                    <label>Email Address:</label>
                    <Field 
                        name="email"
                        type="text"
                        component="input" 
                        autoComplete = "none"                   
                    />
                </fieldset>
                <fieldset>
                    <label>Password:</label>
                    <Field 
                        name="password"
                        type="password"
                        component="input"
                        autoComplete = "none"                
                    />
                </fieldset>
                <div>{this.props.errorMessage}</div>
                <button>Log in</button>
            </form>
        );
    }
}

// from:'name of form'
// using multiple Higher order components 
// use compose from redux
function mapStateToProps(state){
    return {
        errorMessage:state.auth.errorMessage
    }
}
export default compose(
    connect(mapStateToProps,actions),
    reduxForm({ form:'signin'})
)(Signin);


