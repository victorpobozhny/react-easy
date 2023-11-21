import React, {useState} from "react";
import OnOff from "./OnOff/OnOff";

type  AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    handler: ()=>void
}


function Accordion(props: AccordionPropsType) {

    const [toggle, setToggle] = useState(false)
    function changeToggle () {
        setToggle(!toggle)
    }



    console.log("Accordion rendering")
        return (
            <div>
                <AccordionTitle title={props.titleValue} handler={props.handler}/>
                <OnOff/>
                <OnOff/>
                {!props.collapsed && <AccordionBody/> }
            </div>
        )
}



// function Accordion(props: AccordionPropsType) {
//     console.log("Accordion rendering")
//
//     if (props.collapsed) {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue} handler={props.handler}/>
//             </div>
//         )
//     }
//     else {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue} handler={props.handler}/>
//                 <AccordionBody/>
//             </div>
//         )
//     }
// }

type AccordionTitlePropsType = {
    title: string
    handler: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (

        <><h3>{props.title}</h3>
        <button onClick={()=>props.handler()}>Collapse/uncollapse</button>
        </>
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