import React, {useEffect, useState} from 'react';

export default {
    title: 'UseEffect demo'
}

export const Example1 = () => {
    console.log('Example1')

    const [state, setState] = useState<number>(0)
    const [fake, setFake] = useState(99)
    useEffect(() => {
        console.log('useEffect when component update')
        document.title = state.toString()
    }, )
    useEffect(() => {
        console.log('useEffect only once')
        document.title = state.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect when fake update')
        document.title = state.toString()
    }, [fake])

    return (
        <div>
            Count
            <button onClick={() => setState(state + 1)}>+</button>
            <span>{state}</span>
            <br/>
            Fake
            <button onClick={() => setFake(fake - 1)}>+</button>
            <span>{fake}</span>
        </div>
    );
};






