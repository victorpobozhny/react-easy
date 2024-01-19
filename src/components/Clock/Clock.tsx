import React, {FC, memo, useCallback, useEffect, useState} from 'react';
import './Clock.css'

type ClockPropsType = {
    analog: boolean
    setAnalog: () => void
}
export const Clock = memo((props: ClockPropsType) => {
    console.log('Clock')

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
                <div className="clock">
                    <div
                        className="hour_hand"
                        style={{
                            transform: `rotateZ(${date.getHours() * 30}deg)`
                        }}
                    />
                    <div
                        className="min_hand"
                        style={{
                            transform: `rotateZ(${date.getMinutes() * 6}deg)`
                        }}
                    />
                    <div
                        className="sec_hand"
                        style={{
                            transform: `rotateZ(${date.getSeconds() * 6}deg)`
                        }}
                    />
                    <span className="twelve">12</span>
                    <span className="one">1</span>
                    <span className="two">2</span>
                    <span className="three">3</span>
                    <span className="four">4</span>
                    <span className="five">5</span>
                    <span className="six">6</span>
                    <span className="seven">7</span>
                    <span className="eight">8</span>
                    <span className="nine">9</span>
                    <span className="ten">10</span>
                    <span className="eleven">11</span>
                </div>
                :
                <div className={'digitalClock'}>
                    <p>Belarus:</p>
                    <div className={'digitalClockScreen'}>
                        <span>{give2digsTime(date.getHours())}:</span>
                        <span>{give2digsTime(date.getMinutes())}:</span>
                        <span>{give2digsTime(date.getSeconds())}</span>
                    </div>
                </div>
            }
        </div>
    );
})

