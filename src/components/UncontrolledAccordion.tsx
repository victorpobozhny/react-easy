import React, {useState} from "react";
import OnOff from "./OnOff/OnOff";

type UncontrolledAccordionPropsType = {
    title: string
}


function UncontrolledAccordion(props:UncontrolledAccordionPropsType) {

    const [collapsed, setCollapsed] = useState<boolean>(true)

    const collapseChange = () => {
        setCollapsed(!collapsed)
    }

    console.log("Accordion rendering")
        return (
            <div>
                <UncontrolledAccordionTitle title={props.title} handler={collapseChange}/>
                <OnOff/>
                <OnOff/>
                {!collapsed && <UncontrolledAccordionBody/> }
            </div>
        )
}


type UncontrolledAccordionTitlePropsType = {
    title: string
    handler: ()=>void
}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {


    console.log("AccordionTitle rendering")
    return (

        <><h3>{props.title}</h3>
        <button onClick={()=>props.handler()}>Collapse/uncollapse</button>
        </>
    )
}

function UncontrolledAccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;