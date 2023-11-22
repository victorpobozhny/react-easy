import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Rating} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";

function App() {

    const [collapsed, setCollapsed] = useState(true)

    function onClickHandler() {
        setCollapsed(!collapsed)
    }

    const [state, setState] = useState<number>(0)

    function controlRating (id: number) {
        setState(id)
    }

    console.log("App rendered")
    return (
        <div className={'App'}>
            <Accordion titleValue={"Title Accordion 1"} collapsed={collapsed} handler={onClickHandler}/>
            <Rating value={state} controlRating={controlRating}/>

            <UncontrolledRating />
            <UncontrolledAccordion title={'Title Accordion 2 (uncontrolled)'} />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendered")
    return (
        <h1>{props.title}</h1>
    )
}

export default App;