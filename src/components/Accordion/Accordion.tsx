import React from "react";

type ItemType = {
    title: string
    value: any
}
export type  AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    callback: (value: any) => void
}

function Accordion(props: AccordionPropsType) {

    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} callback={props.callback}/>}
        </div>
    )
}



type AccordionBodyPropsType = {
    items: ItemType[]
    callback: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    const onclick = (value: any, title: string) => {
        props.callback(`${value}. ${title}`)
    }

    const items = props.items.map((el, ind) => <li onClick={() => onclick(el.value, el.title)} key={ind}>{el.title}</li>)

    return (
        <ul>
            {items}
        </ul>
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
export default Accordion;