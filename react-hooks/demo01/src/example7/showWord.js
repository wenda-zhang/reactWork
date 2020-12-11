import React, {useContext} from 'react';
import { ColorContext } from './colors';

function ShowWord() {
    const {color} = useContext(ColorContext);
    return (
        <div style={{color: color}}>
            我此刻的的颜色
        </div>
    )
}

export default ShowWord;