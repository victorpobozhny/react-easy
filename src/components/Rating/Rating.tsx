import React, {MouseEventHandler} from "react";


type RatingPropsType = {
    value: number
    controlRating: (id: number)=>void
}

export function Rating(props: RatingPropsType) {
    console.log("Rating rendered")

    return (<div>
        <Star selected={props.value > 0} id={1} controlRating={props.controlRating}/>
        <Star selected={props.value > 1} id={2} controlRating={props.controlRating}/>
        <Star selected={props.value > 2} id={3} controlRating={props.controlRating}/>
        <Star selected={props.value > 3} id={4} controlRating={props.controlRating}/>
        <Star selected={props.value > 4} id={5} controlRating={props.controlRating}/>
    </div>)
}

type StarPropsType = {
    selected: boolean
    id: number
    controlRating: (id: number)=>void
}

function Star(props: StarPropsType) {
    console.log("Star rendered")
    debugger

    const onClickHandler: MouseEventHandler<HTMLSpanElement> = () => {
        props.controlRating(props.id)
    }


    // if (props.selected) {
    //     return (<span onClick={onClickHandler}><b>Star</b> </span>)
    // } else {
    //     return (<span onClick={onClickHandler}>Star</span>)
    // }

    return props.selected ? <span onClick={onClickHandler}><b>Star</b> </span> :
        <span onClick={onClickHandler}>Star</span>

}


