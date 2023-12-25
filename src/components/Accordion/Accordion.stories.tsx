import type {Meta, StoryObj} from '@storybook/react';
import Accordion from './Accordion';
import React, {useState} from "react";
import {action} from '@storybook/addon-actions';
import {itemsArray} from "../../App";


const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const FirstStory: Story = {
    args: {
        titleValue: "Accordion",
        collapsed: true,
        onChange: action('collapsed or uncollapsed accordion'),
        items: itemsArray,
        callback: value => {
            console.log(value)}
    },
};


const onChangeHandler = action('onChange') // ищем в сторибук.advanced/legacy action. импортируем его.

export const CollapsedAccordion = () => {
    return (
        <Accordion titleValue={"Collapsed Accordion"}
                   collapsed={true}
                   onChange={onChangeHandler}
                   items={itemsArray}
                   callback={()=>{}}
        />
    )
}
export const OpenedAccordion = () => {
    return (
        <Accordion titleValue={"Opened Accordion"}
                   collapsed={false}
                   onChange={() => {
                   }}
                   items={itemsArray}
                   callback={()=>{}}
        />
    )
}
export const AccordionDemo = () => {

    const [collapsed, setCollapsed] = useState(false)
    return (
        <Accordion titleValue={"Accordion Demo"}
                   collapsed={collapsed}
                   onChange={() => {
                       setCollapsed(!collapsed)
                   }}
                   items={itemsArray}
                   callback={action('clicked ')}
        />
    )
}




