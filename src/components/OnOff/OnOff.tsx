import React from "react";

type OnOffPropsType = {
    toggle: boolean
    selector: ()=>void
}


function OnOff(props: OnOffPropsType) {
    console.log("Accordion rendering")
    return (
        <div >
            <button onClick={()=>props.selector()}>on|off</button>
            {props.toggle && <span style={{backgroundColor: 'lightgreen'}}>Turned on</span>
            || <span style={{backgroundColor: 'red'}}>Turned off</span>}
        </div>
    )
}


export default OnOff;