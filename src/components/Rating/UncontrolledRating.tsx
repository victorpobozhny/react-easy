import React, {MouseEventHandler, useState} from "react";



export function UncontrolledRating() {
    console.log("Rating rendered")

    const [id, setId] = useState<number>(0)

    const onclickHandler = (rate: number) => {
        setId(rate)
    }

    return (<div>
        <button onClick={()=>onclickHandler(1)}><Star selected={id > 0}/></button>
        <button onClick={()=>onclickHandler(2)}><Star selected={id > 1}/></button>
        <button onClick={()=>onclickHandler(3)}><Star selected={id > 2}/></button>
        <button onClick={()=>onclickHandler(4)}><Star selected={id > 3}/></button>
        <button onClick={()=>onclickHandler(5)}><Star selected={id > 4}/></button>
        {/*<Star selected={id > 1} />*/}
        {/*<Star selected={id > 2}/>*/}
        {/*<Star selected={id > 3}/>*/}
        {/*<Star selected={id > 4}/>*/}
    </div>)
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {

    const starItem = {
        width: '25px',
        height: '25px',
        border: '2px solid black',
        borderRadius: '15px',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.selected ? 'gold' : 'white'
    }

        return <div style={starItem} ></div>
}


