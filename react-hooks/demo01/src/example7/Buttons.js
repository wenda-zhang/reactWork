import React, {useContext} from 'react';
import {ColorContext, UPDATE_COLOR} from './colors'

function Buttons() {

    const {dispatch} = useContext(ColorContext);

    return(
        <div>
            <button onClick={()=>{dispatch({type: UPDATE_COLOR, color: 'red'})}}>点我变红色</button>
            <button onClick={()=>{dispatch({type: UPDATE_COLOR, color: 'yellow'})}}>点我变黄色</button>
        </div>
    )
}

export default Buttons;