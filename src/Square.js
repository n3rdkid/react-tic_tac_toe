import React from 'react';
import classes from './Square.module.css'
const square = (props)=>{
    return <button disabled={props.disabled} className={classes.square} onClick={props.clicked}>{props.value}</button>
}
export default square;