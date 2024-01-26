import React, {memo, useEffect, useState} from 'react';
import './Clock.css'
import {DigitalClock} from "./DigitalClock";
import {AnalogClock} from "./AnalogClock";

type ClockPropsType = {
    analog: boolean
    setAnalog: () => void
}
export const Clock = memo((props: ClockPropsType) => {

    const [date, setDate] = useState(new Date())
    useEffect(() => {
        let interval1 = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(interval1)
        }

    }, [])

    const give2digsTime = (num: number) => num < 10 ? `0${num}` : `${num}`

    return (
        <div className={'clockWrapper'}>
            <button onClick={props.setAnalog}>ChangeClockType</button>
            {props.analog ?
                <AnalogClock date={date}/>
                :
                <DigitalClock
                    hours={give2digsTime(date.getHours())}
                    minutes={give2digsTime(date.getMinutes())}
                    seconds={give2digsTime(date.getSeconds())}
                />
            }
        </div>
    );
})

