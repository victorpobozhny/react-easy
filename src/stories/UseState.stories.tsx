import React, {useMemo, useState} from 'react';

export default {
    title: 'UseState demo'
}

const generateData = () => {
    //difficult processing
    console.log('generatingData')
    return 1
}

export const Example1 = () => {
    console.log('Example1')

    const [state, setState] = useState<number>(generateData)
    const changer = (state: number) => {
        return state + Math.round(Math.random()*10)
    }

    return (
        <div>
            <button onClick={() => setState(changer)}>+</button>
            <div>{state}</div>
        </div>
    );
};






