import React, {useState} from "react";

function OnOff() {

    const [state, setState] = useState<boolean>(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        marginTop: '5px',
        padding: '2px',
        backgroundColor: state ? 'green' : 'white',
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
        backgroundColor: !state ? 'red' : 'white',
        cursor: 'pointer'
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        border: '1px solid black',
        borderRadius: '15px',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: state ? 'green' : 'red'

    }
    const onClickHandler = () => {
        setState(!state)
    }
    console.log("Accordion rendering")
    return (
        <div>
            <div style={onStyle} onClick={onClickHandler}>On</div>
            <div style={offStyle} onClick={onClickHandler}>Off</div>
            <div style={indicatorStyle}></div>
            {/*<button onClick={onClickHandler}>on|off</button>*/}
            {/*{props.on && <span style={{backgroundColor: 'lightgreen'}}>Turned on</span>*/}
            {/*|| <span style={{backgroundColor: 'red'}}>Turned off</span>}*/}

        </div>
    )
}


export default OnOff;