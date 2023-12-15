import {ChangeEvent, LegacyRef, RefObject, useRef, useState} from "react";

export const UncontrolledInput = () => {
    const [state, setState] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setState(e.currentTarget.value)
    }



    const [state2, setState2] = useState('')
    const refText = useRef<HTMLInputElement | null>(null)

    const onClickHandler = () => {
        if (refText.current) {
            setState2(refText.current?.value)
        }
    }


    return (
        <div>
            <input onChange={onChangeHandler}/>--- {state}
            <div>
                <input type={"text"} ref={refText}/>
                <button onClick={onClickHandler}>save</button>
                actualValue: {state2}
            </div>
        </div>
    )
}

