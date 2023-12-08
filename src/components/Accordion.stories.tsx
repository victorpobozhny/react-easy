import type { Meta, StoryObj } from '@storybook/react';
import  Accordion from './Accordion';
import React, {useState} from "react";
import { action } from '@storybook/addon-actions';


const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const FirstStory: Story = {
    args: {
        titleValue: "Accordion",
        collapsed: true,
        onChange: () => {},
    },
};



const onChangeHandler = action('onChange') // ищем в сторибук.advanced/legacy action. импортируем его.

export const CollapsedAccordion = () => {
    return (
        <Accordion titleValue={"Collapsed Accordion"}
                   collapsed={true}
                   onChange={onChangeHandler}/>
    )
}
export const OpenedAccordion = () => {
    return (
        <Accordion titleValue={"Opened Accordion"}
                   collapsed={false}
                   onChange={()=>{}}/>
    )
}
export const AccordionDemo = () => {

    const [collapsed, setCollapsed] = useState(false)
    return (
        <Accordion titleValue={"Accordion Demo"}
                   collapsed={collapsed}
                   onChange={()=>{setCollapsed(!collapsed)}}/>
    )
}




