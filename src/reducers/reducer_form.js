import update from 'immutability-helper';

const defaultFormObject = {
    name:"",
    y: 0
};


let defaultState = {
    list:[
        defaultFormObject
    ]
    
};
export default function(state=defaultState,action){
    switch(action.type){
        case 'INPUT':   
            //console.log('reducer_form::INPUT');
            return update(state,{
                list:{
                    [action.id]:{
                        name: {$set :action.payload}
                    }
                }
            })
        case 'INPUTVALUE':
            //console.log('reducer_form::INPUTVALUE');
            return update(state,{
                list:{
                    [action.id]:{
                        y: {$set :parseInt(action.payload)}
                    }
                }
            })
        case 'ADD':
            //console.log(`reducer_form::ADD`);
            let newList = {...state};
            newList.list.push(defaultFormObject);
            return newList;
        case 'REMOVE':
            //console.log(`reducer_form::REMOVE`);
            let newList1 = {...state};
            newList1.list.pop();
            return newList1;
        default:
            return defaultState;
    }
}