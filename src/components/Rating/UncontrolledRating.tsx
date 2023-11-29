import React, {useState} from "react";


export function UncontrolledRating() {
    console.log("Rating rendered")

    const [value, setValue] = useState<number>(0)


    return (<div>
        <Star selected={value > 0} setValue={() => setValue(1)} />
        <Star selected={value > 1} setValue={() => setValue(2)} />
        <Star selected={value > 2} setValue={() => setValue(3)} />
        <Star selected={value > 3} setValue={() => setValue(4)} />
        <Star selected={value > 4} setValue={() => setValue(5)} />
    </div>)
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {
    const onclickHandler = () => {
        props.setValue()
    }

    const starItem = {
        clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
        width: '35px',
        height: '35px',
        display: 'inline-block',
        marginLeft: '5px',
        cursor: 'pointer',
        backgroundColor: props.selected ? 'gold' : 'black'
    }

    return <div style={starItem} onClick={onclickHandler}> </div>
}


