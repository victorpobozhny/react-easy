import React, {useReducer} from "react";
import {reducer, TOGGLE_CONSTANT} from "./reducer";


function UncontrolledAccordion() {

    const title = 'Title Uncontrolled Accordion 2 (click me :)'

    //const [collapsed, setCollapsed] = useState<boolean>(true)
    const [state, dispatch] = useReducer(reducer, {collapsed: true})

    const collapseChange = () => {
        dispatch({type: TOGGLE_CONSTANT})
    }

    return (
        <div>
            <UncontrolledAccordionTitle title={title} handler={collapseChange}/>
            {!state.collapsed && <UncontrolledAccordionBody/>}
        </div>
    )
}


type UncontrolledAccordionTitlePropsType = {
    title: string
    handler: () => void
}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {

    const onClickHandler = () => {
        debugger;
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

export default UncontrolledAccordion;