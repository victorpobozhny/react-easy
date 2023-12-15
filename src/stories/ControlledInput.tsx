import {ChangeEvent, useState} from "react";
import {action} from "@storybook/addon-actions";

export const ControlledInput = () => {

    const [state, setState] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setState(e.currentTarget.value)

    }

    const [checkedState, setCheckedState] = useState(true)
    const onChangeForCheckbox = () => {
        setTimeout(() => setCheckedState(!checkedState), 2000)
    }


    const [select, setSelect] = useState<string | number | readonly string[] | undefined>(undefined)

    const onChangeForSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelect(e.currentTarget.value)
    }
    return (
        <div>
            <input value={state} onChange={onChangeHandler}/>
            <input type={"checkbox"} checked={checkedState}
                   onChange={onChangeForCheckbox}/>--<span>{checkedState.toString()}</span>

            <select onChange={onChangeForSelect} value={select}>
                <option>none</option>
                <option value={'1'}>Minsk</option>
                <option value={'2'}>Moscow</option>
                <option value={'3'}>Kiev</option>

            </select>
        </div>
    )
}

