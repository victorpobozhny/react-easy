import type {Meta} from '@storybook/react';
import {Select} from './Select';
import React, {useState} from "react";
import {action} from '@storybook/addon-actions';


const meta: Meta<typeof Select> = {
    component: Select,
};
export default meta;

export const With = () => {
const [value, setValue] = useState('2')

    return (
        <div>
            <Select onChange={setValue}
                    value={value}
                    items={
                        [
                            {value: '1', title: 'Minsk'},
                            {value: '2', title: 'Brest'},
                            {value: '3', title: 'Kobrin'},
                        ]
                    }
            />
        </div>
    )
}
export const Without = () => {
    const [value, setValue] = useState(null)
    return (
        <div>
            <Select onChange={setValue}
                    value={value}
                    items={
                        [
                            {value: '1', title: 'Minsk'},
                            {value: '2', title: 'Brest'},
                            {value: '3', title: 'Kobrin'},
                        ]
                    }
            />
        </div>
    )
}




