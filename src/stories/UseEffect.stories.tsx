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
    },)
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
export const SetTimeoutExample1 = () => {
    console.log('Example1')

    const [state, setState] = useState<number>(0)
    const [fake, setFake] = useState(99)

    useEffect(() => {
        setInterval(() => {
            setState(state => state + 1)
        }, 1000)
    }, [])

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
export const Clock = () => {
    console.log('time update')
    const current = new Date()

    const [time, setTime] = useState([current.getHours(), current.getMinutes(), current.getSeconds()])
    useEffect(() => {
        setInterval(() => {
            setTime([new Date().getHours(), new Date().getMinutes(), new Date().getSeconds()])
        }, 1000)
    }, [])


    return (
        <div>
            <div>
                <h3>Current Time</h3>
                <h4>Minsk:</h4>
                {`${time[0]}:${time[1]}:${time[2]}`}
            </div>
        </div>
    );
};







