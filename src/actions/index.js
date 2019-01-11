export function ADD(){
    return{
        type: 'ADD'
    };
}

export function REMOVE(){
    return{
        type: 'REMOVE'
    };
}

export function INPUT(e,key){
    return{
        type: 'INPUT',
        payload: e.target.value,
        id: key
    };
}

export function INPUTVALUE(e,key){
    return{
        type: 'INPUTVALUE',
        payload : e.target.value,
        id:key
    }
}