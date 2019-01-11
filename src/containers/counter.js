import React, {Component} from 'react';
import {connect} from 'react-redux';

class Counter extends Component{
    render(){
        return(
            <div>
                {this.props.form.list.length}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        form: state.formReducer
    };
}

export default connect(mapStateToProps)(Counter);