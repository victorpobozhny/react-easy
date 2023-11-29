import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    title: string
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    const [collapsed, setCollapsed] = useState<boolean>(true)

    const collapseChange = () => {
        setCollapsed(!collapsed)
    }

    console.log("Accordion rendering")
    return (
        <div>
            <UncontrolledAccordionTitle title={props.title} handler={collapseChange}/>
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

export default UncontrolledAccordion;