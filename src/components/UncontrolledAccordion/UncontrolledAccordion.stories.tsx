import type {Meta} from '@storybook/react';
import UncontrolledAccordion from './UncontrolledAccordion';
import {action} from '@storybook/addon-actions';
import React, {useReducer} from "react";
import {ActionType} from "./reducer";


const meta: Meta<typeof UncontrolledAccordion> = {
    component: UncontrolledAccordion,
};
export default meta;
const reducer = (state: boolean, action: ActionType) => {
    if (action.type == 'TOGGLE-COLLAPSED') {
        return !state
    }
    return state
}


export function Demo() {


    const title = 'Title Uncontrolled Accordion 2 (click me :)'

    //const [collapsed, setCollapsed] = useState<boolean>(true)
    const [collapsed, dispatch] = useReducer(reducer, true)

    const collapseChange = () => {
        debugger;
        dispatch({type: 'TOGGLE-COLLAPSED'})
    }


    return (
        <div>
            <UncontrolledAccordionTitle title={title} handler={collapseChange}/>
            {!collapsed && <UncontrolledAccordionBody/>}
        </div>
    )
}


type UncontrolledAccordionTitlePropsType = {
    title: string
    handler: () => void
}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {

    const onClickHandler = () => {
        props.handler()
    }

    return (
        <h3 onClick={onClickHandler}>{props.title}</h3>
    )
}

function UncontrolledAccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}






