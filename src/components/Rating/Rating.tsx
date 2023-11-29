import React, {MouseEventHandler} from "react";

type RatingPropsType = {
    value: number
    controlRating: (id: number) => void
}

export function Rating(props: RatingPropsType) {
    console.log("Rating rendered")

    return (<div>
        <Star selected={props.value > 0} value={1} controlRating={props.controlRating}/>
        <Star selected={props.value > 1} value={2} controlRating={props.controlRating}/>
        <Star selected={props.value > 2} value={3} controlRating={props.controlRating}/>
        <Star selected={props.value > 3} value={4} controlRating={props.controlRating}/>
        <Star selected={props.value > 4} value={5} controlRating={props.controlRating}/>
    </div>)
}

type StarPropsType = {
    selected: boolean
    value: number
    controlRating: (id: number) => void
}

function Star(props: StarPropsType) {

    const onClickHandler: MouseEventHandler<HTMLSpanElement> = () => {
        props.controlRating(props.value)
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

    return <div style={starItem} onClick={onClickHandler}> </div>
}


