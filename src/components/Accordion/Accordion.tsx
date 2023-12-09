import React from "react";


export type  AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onChange: () => void
}

function Accordion(props: AccordionPropsType) {

    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickHandler = () => {
        props.onChange()
    }

    return (
        <h3 onClick={onClickHandler}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;