import {ADD_STEP,RESET_STEPS} from './types.js'

let initialState={
    steps:2
}


export function reducer(state=initialState,action){
    switch(action.type){
        case ADD_STEP: return {...state,steps:state.steps+1};

        case RESET_STEPS: return {steps:0};

        default:return state;
    }
}