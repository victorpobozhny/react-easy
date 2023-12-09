import type {Meta, StoryObj} from '@storybook/react';
import {UncontrolledOnOff} from './UncontrolledOnOff';
import {useState} from "react";
import {action} from "@storybook/addon-actions";
import {bool} from "prop-types";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'UncontrolledOnOff Component',
    component: UncontrolledOnOff,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        defaultOn: bool,
        setSwitchOn: (switchOn: boolean) => {},
    },
}
//satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const OnOff = () => {
const [def, setDef] = useState(false)
    return <UncontrolledOnOff setSwitchOn={()=>{setDef(!def)}} defaultOn={def}/>

};

export const UncontrolledOnOff_WithAction: Story = {
    args: {
        setSwitchOn: action('on or off clicked')
    },
};
export const ON: Story = {
    args: {
        defaultOn: true,
        setSwitchOn: action('on or off clicked')
    },
};
export const OFF: Story = {
    args: {
        defaultOn: false,
        setSwitchOn: action('on or off clicked')
    },
};





