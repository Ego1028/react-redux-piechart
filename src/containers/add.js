import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {ADD} from '../actions/index';

class Add extends Component{

    render(){
        return(
            <button type='button'
            onClick={()=>this.props.ADD()}
            >
                add

            </button>
        )
    }
}

function mapStateToProps(state){
    return{
        form:state.formReducer
    };
}
function mapDisPatchToProps(dispatch){
    return bindActionCreators({ ADD:ADD},dispatch)
}
export default connect(mapStateToProps,mapDisPatchToProps)(Add);