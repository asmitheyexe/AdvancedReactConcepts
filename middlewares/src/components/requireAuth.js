/**
 * Example of a Higher order Component
 * Convention is to name HoC with lowercase starting letter = 'requireAuth'
 * 
 */

import React, { Component } from 'react'
import {connect} from 'react-redux';

export default ChildComponent =>{
    class ComposedComponent extends Component{

        // First render
        componentDidMount(){
            this.checkUserAuthStatus();
        }
        // update on State change
        componentDidUpdate(){
            this.checkUserAuthStatus();
        }

        checkUserAuthStatus(){
            if(!this.props.auth){
                this.props.history.push('/');
            }
        }

        render(){
            // Dont forget to pass the props down to the child component 
            return(
                <ChildComponent {...this.props} />
            );
        }
    }

    function mapStateToProps(state){
        return{
            auth: state.auth
        }
    }
    return connect(mapStateToProps)(ComposedComponent);
}

// how to use these
/*
import requireAuth from 'components/requireAuth';

class SomeComponent {

}

export default requireAuth(SomeComponent);

//in main app you would do
import SomeComponent from 'components/SomeComponent';
// this would get you your HoC

*/

/**
 * BOILDER PLATE for HoC
 * 
 * 
   import React, { Component } from 'react'

    export default (ChildComponent) =>{
        class ComposedComponent extends Component{
            render(){
                return(
                    <ChildComponent />
                );
            }
        }

        return ComposedComponent;
    }

 * 
 * 
 * 
 */
