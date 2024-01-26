import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {ItemType, Select} from "./components/Select/Select";
import {Clock} from "./components/Clock/Clock";


export const itemsArray = [{title: 'Bob', value: '1'}, {title: 'Mike', value: '2'}, {title: 'John', value: '3'}]


function App() {

    const [analog, setAnalog] = useState(false)
    const setAnalogHandler = () => {
        setAnalog(!analog)
    }
    const whowasclicked = (value: any) => {
        console.log(value)
    }
    const [collapsed, setCollapsed] = useState(true)

    function onClickHandler() {
        setCollapsed(!collapsed)
    }

    const [state, setState] = useState<number>(0)
    const [stateOnOff, setStateOnOff] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)
    const [selectItems, setSelectItems] = useState<ItemType[]>([
        {title: 'Minsk', value: false},
        {title: 'Brest', value: false},
        {title: 'Grodna', value: false},
    ])


    const [value, setValue] = useState('')

    const onChange = () => {

    }
    return (
        <div className={'App'}>


            <PageTitle title={'React - easy'}/>
            <Clock analog={analog} setAnalog={setAnalogHandler}/>
            <Accordion titleValue={"Title Controlled Accordion 1 (click me :)"}
                       collapsed={collapsed}
                       onChange={onClickHandler}
                       items={itemsArray}
                       callback={whowasclicked}
            />
            <Rating
                value={state}
                controlRating={setState}/>
            <OnOff
                stateOnOff={stateOnOff}
                setStateOnOff={setStateOnOff}/>
            <p>========================================================</p>

            <UncontrolledAccordion/>
            <UncontrolledRating/>
            <UncontrolledOnOff setSwitchOn={setSwitchOn}/>
            <p>{switchOn.toString()}</p>


            <p>========================================================</p>
            <Select items={selectItems} value={value} onChange={onChange}/>


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