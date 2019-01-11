import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {INPUT} from '../actions/index';
import {INPUTVALUE} from '../actions/index';

var chart;

class Form extends Component{ 
    
    /***
    renderList() {
        console.log(this.props.form.list);
        return this.props.form.list.map((item, index)=>
            {
                console.log(index)
                return (
                    <div key={index}>
                    Data name: {index} <br/>
                    <input type="text" name="dataName" 
                    onChange={(e)=>{this.props.INPUT(e)}}
                    /><br/>
                    Data value:<br/>
                    <input type="number" name="dataValue"
                    onChange={(e)=>{this.props.INPUTVALUE(e)}}
                    /><br/>     
                    </div>
                )
            }
        )
    }*/
    componentWillReceiveProps(newProp) {
        let pieData=[];
        for(let i=0;i<newProp.form.list.length;i++){
            pieData.push(newProp.form.list[i]);
        }
        Highcharts.chart('piechart', {
            chart: {
                events: {
                    redraw: function () {
                        var label = this.renderer.label('The chart was just redrawn', 100, 120)
                            .attr({
                                fill: Highcharts.getOptions().colors[0],
                                padding: 10,
                                r: 5,
                                zIndex: 8
                            })
                            .css({
                                color: '#FFFFFF'
                            })
                            .add();
        
                        setTimeout(function () {
                            label.fadeOut();
                        }, 1000);
                    }
                },
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Data Report System'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: pieData
            }]
        });
    }
    componentDidMount() {
    }
    render(){
        //console.log(`form::render - the form list:`);
        //console.log(this.props.form.list);
        let form = this.props.form.list.map((item, index)=>
        {
            return (
                <div key={index} id={index}>
                Data name: {index} <br/>
                <input type="text" name="dataName" 
                onChange={(e)=>{this.props.INPUT(e,index)}}
                /><br/>
                Data value:<br/>
                <input type="number" name="dataValue"
                onChange={(e)=>{this.props.INPUTVALUE(e,index)}}
                /><br/>     
                </div>
            )
        }
    );
    
    
        return(
            <div>
                <form>
                    {form}                
                </form>
                <div id="piechart"></div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        form: state.formReducer
    };
}
function mapDisPatchToProps(dispatch){
    return bindActionCreators({ INPUT:INPUT,INPUTVALUE:INPUTVALUE},dispatch)
}
export default connect(mapStateToProps,mapDisPatchToProps)(Form);