import type {Meta, StoryObj} from '@storybook/react';

import {Rating} from './Rating';
import {number} from "prop-types";
import {useState} from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Rating Component',
    component: Rating,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        value: number,
        controlRating: (id: number) => {
        },
    },
}
//satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Changing_Rating = () => {
    const [rating, setRating] = useState(5)
    return <Rating value={rating} controlRating={setRating}/>

};

export const Empty_Rating: Story = {
    args: {
        value: 0,
        controlRating: (id: number) => {
        }
    },
};


export const Rating_1: Story = {
    args: {
        value: 1,
        controlRating: (id: number) => {
        }
    },
};
export const Rating_2: Story = {
    args: {
        value: 2,
        controlRating: (id: number) => {
        }
    },
};
export const Rating_3: Story = {
    args: {
        value: 3,
        controlRating: (id: number) => {
        }
    },
};
export const Rating_4: Story = {
    args: {
        value: 4,
        controlRating: (id: number) => {
        }
    },
};

export const FullRating: Story = {
    args: {
        value: 5,
        controlRating: (id: number) => {
        }
    },
};

