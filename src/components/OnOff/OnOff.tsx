import React from "react";

type OnOffPropsType = {
    stateOnOff: boolean
    setStateOnOff: (stateOnOff: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        marginTop: '5px',
        padding: '2px',
        backgroundColor: props.stateOnOff ? 'green' : 'white',
        cursor: 'pointer'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        marginTop: '5px',
        padding: '2px',
        backgroundColor: !props.stateOnOff ? 'red' : 'white',
        cursor: 'pointer'
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        border: '1px solid black',
        borderRadius: '15px',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.stateOnOff ? 'green' : 'red'

    }
    const onClickHandler = () => {
        props.setStateOnOff(!props.stateOnOff)
    }
    console.log("Accordion rendering")
    return (
        <div>
            <div style={onStyle} onClick={onClickHandler}>On</div>
            <div style={offStyle} onClick={onClickHandler}>Off</div>
            <div style={indicatorStyle}> </div>
        </div>
    )
}


