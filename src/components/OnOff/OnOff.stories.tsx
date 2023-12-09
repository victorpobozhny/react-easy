import type {Meta, StoryObj} from '@storybook/react';

import {OnOff} from './OnOff';
import {bool} from "prop-types";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'OnOff Component',
    component: OnOff,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        stateOnOff: bool,
        setStateOnOff: (stateOnOff: boolean) => {
        },
    },
}
//satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const OnOffSwitchable = () => {
    const [state, setState] = useState<boolean>(false)
    return <OnOff stateOnOff={state} setStateOnOff={setState}/>

};

export const ON_Mode: Story = {
    args: {
        stateOnOff: true,
        setStateOnOff: action('on or off clicked')
    },
};
export const OFF_Mode: Story = {
    args: {
        stateOnOff: false,
        setStateOnOff: action('on or off clicked')
    },
};




