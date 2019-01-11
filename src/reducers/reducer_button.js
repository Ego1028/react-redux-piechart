
let defaultState = {
    countNum: 2
};

export default function(state=defaultState,action){

    switch(action.type){
        case 'ADD':
            var count = state.countNum
            if(count<10){
                count++;
            }
            return{
                countNum: count
            }
            break;
        case 'REMOVE':
            var count = state.countNum
            if(count!=0){
                count--;
            }
            return{
                countNum: count
            }
            break;
        default: 
            return defaultState;
    }
}

