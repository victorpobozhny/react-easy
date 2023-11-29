import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Rating} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";

function App() {

    const [collapsed, setCollapsed] = useState(true)

    function onClickHandler() {
        setCollapsed(!collapsed)
    }

    const [state, setState] = useState<number>(0)

    const [stateOnOff, setStateOnOff] = useState<boolean>(false)

    return (
        <div className={'App'}>
            <PageTitle title={'React - easy'}/>

            <Accordion titleValue={"Title Controlled Accordion 1 (click me :)"}
                       collapsed={collapsed}
                       handler={onClickHandler}/>
            <Rating
                value={state}
                controlRating={setState}/>
            <OnOff
                stateOnOff={stateOnOff}
                setStateOnOff={setStateOnOff}/>
            <p>========================================================</p>

            <UncontrolledAccordion/>
            <UncontrolledRating/>
            <UncontrolledOnOff/>
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