import React, { Component } from 'react'
import requireAuth from './requireAuth';
class Feature extends Component{


    render(){
        return(
            <div>
                feature stuff
            </div>
        );
    }
}
export default requireAuth(Feature);