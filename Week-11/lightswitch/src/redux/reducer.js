import {FLIP} from './types.js'

let initialState={
    isLightOn:true,
}


export function reducer(state=initialState,action){
    switch(action.type){
        case FLIP: return {...state,isLightOn:!state.isLightOn};

        default:return state;
    }
}