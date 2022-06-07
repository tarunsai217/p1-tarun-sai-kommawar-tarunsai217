import React from 'react'
import styles from './StepCounter.module.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {addStep,resetSteps} from '../../redux/actions'
function StepCounter() {

const steps = useSelector(state => state.steps);
const dispatch = useDispatch()

const addStepHandler=()=>{
    dispatch(addStep())
}

const resetStepsHandler=()=>{
    dispatch(resetSteps())
}

  return (
    <div className={styles.stepCounter}>
     <p className={styles.text}>You've walked {steps} steps today!</p>
     <button className={styles.add} onClick={addStepHandler}>Add a Step</button>
     <button className={styles.reset} onClick={resetStepsHandler}>Reset Steps</button>
    </div>
  )
}

export default StepCounter