import React, {FC} from 'react';
import './Clock.css'
type DigitalClockProps = {
    hours: string
    minutes: string
    seconds: string
}
export const DigitalClock: FC<DigitalClockProps> = ({hours, minutes, seconds}) => {
    return (
        <div className={'digitalClock'}>
            <p>Belarus:</p>
            <div className={'digitalClockScreen'}>
                <span>{hours}:</span>
                <span>{minutes}:</span>
                <span>{seconds}</span>
            </div>
        </div>
    );
};
