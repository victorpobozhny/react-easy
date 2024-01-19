import type {StoryObj} from '@storybook/react';
import {Clock} from "./Clock";
import {useState} from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Clock Component',
    component: Clock,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        analog: 'boolean',


    },
}
//satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Clock_1 = () => {
    const [analog, setAnalog] = useState(false)
    const setAnalogHandler = () => {
        setAnalog(!analog)
    }
    return <Clock analog={analog} setAnalog={setAnalogHandler}/>
};
