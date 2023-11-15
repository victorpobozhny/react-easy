import React from "react";


type RatingPropsType = {
    value: number
}

export function Rating(props: RatingPropsType) {
    console.log("Rating rendered")

    return (<div>
        <Star selected={props.value > 0}/>
        <Star selected={props.value > 1}/>
        <Star selected={props.value > 2}/>
        <Star selected={props.value > 3}/>
        <Star selected={props.value > 4}/>
    </div>)
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log("Star rendered")
    debugger
    // return (
    //     {props.selected? <span><b>Star</b> </span> : <span>Star</span>}
    // )


    if (props.selected) {
        return (<span><b>Star</b> </span>)
    } else {
        return (<span>Star</span>)
    }
}


