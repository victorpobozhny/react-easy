import React, {useEffect, useState} from 'react';

export default {
    title: 'UseEffect2 demo'
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('Example: ' + counter)
    useEffect(() => {
        console.log('Effect occured: ' + counter)
        return () => {
            console.log('reset effect: ' + counter)
        }
    }, [counter])
    return <>
        Hello, counter {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
};
export const ExampleAddEventListener = () => {
    const [text, setText] = useState('')

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.code)
            setText(state => state + ' ' + e.key)
        }

        window.addEventListener('keypress', handler)

        return () => window.removeEventListener('keypress', handler)

    }, [text])


    return <>
        Current text: {text}
    </>
};
export const SetTimeoutExample = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const int = setInterval(() => {
            console.log('tick')
        }, 1000)
        return () => {
            clearInterval(int)
        }
    }, [count])

    return <>
        Current count: {count}
        <button onClick={() => setCount(count + 1)}>+</button>
    </>
};