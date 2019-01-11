import React, {Component} from 'react';
import {connect} from 'react-redux';

class TestOutput extends Component{
    
    render(){
        let form = this.props.form.list.map((item, index)=>
        {
            return (
                <div key={index} id={index}>
                Data name: {this.props.form.list[index].name}<br/>
                <br/>
                Data value: {this.props.form.list[index].y}<br/>
                <br/>     
                </div>
            )
        }
        );
        return(
            <div>
                {form}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        form:state.formReducer
    };
}

export default connect(mapStateToProps)(TestOutput);