import {ADD_STEP,RESET_STEPS} from './types.js'

function addStep(){
    return {
        type:ADD_STEP
    }
}

function resetSteps(){
    return {
        type:RESET_STEPS
    }
}

export {addStep,resetSteps};