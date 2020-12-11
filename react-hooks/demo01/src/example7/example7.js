import React from 'react';
import ShowWord from './showWord';
import Buttons from './Buttons';
import { Color } from './colors';

function Example7() { 
    return (
        <div>
            <Color>
                <ShowWord></ShowWord>
                <Buttons></Buttons>
            </Color>
        </div>
    )
}

export default Example7;