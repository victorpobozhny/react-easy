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

    console.log("App rendered")
    return (
        <div>
            <Accordion titleValue={"Title Accordion 1"} collapsed={collapsed} handler={onClickHandler}/>
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />
            <UncontrolledRating />
            <UncontrolledAccordion title={'Title Accordion 2 (uncontrolled)'}/>
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