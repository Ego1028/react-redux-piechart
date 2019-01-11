import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {REMOVE} from '../actions/index';

class Remove extends Component{

    render(){
        return(
            <button type='button' onClick={()=>this.props.REMOVE()} >remove </button>
        )
    }

}

function mapStateToProps(state){
    return{
        form:state.formReducer
    };
}
function mapDisPatchToProps(dispatch){
    return bindActionCreators({ REMOVE:REMOVE},dispatch)
}
export default connect(mapStateToProps,mapDisPatchToProps)(Remove);