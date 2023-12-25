import React, {KeyboardEvent, useEffect, useState} from "react";
import s from './Select.module.css'
import {log} from "util";

export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}
export type ItemType = {
    title: string
    value: any
}


export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElemValue, setHoveredElemValue] = useState(props.value)
    const selectedItem = props.items.find(i => i.value === props.value)

    const hoveredItem = props.items.find(i => i.value === hoveredElemValue)


    useEffect(() => {
        setHoveredElemValue(props.value)
    }, [props.value])


    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key == 'ArrowDown' || e.key == 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value == hoveredElemValue) {
                    const pretendentElement = e.key == 'ArrowDown'
                        ? props.items[i+1]
                        : props.items[i-1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return;
                    }
                }
            }
            if(!selectedItem) {
                props.onChange(props.items[0].value)
            }

        }
        if (e.key == 'Enter' || e.key == 'Escape') {
            setHoveredElemValue(false)
        }

    }

    return (
        <><select>
            <option value={''}>Minsk</option>
            <option value={''}>Brest</option>
            <option value={''}>Kobrin</option>
        </select>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>


                <span className={s.main} onClick={toggleItems}>
                    {selectedItem && selectedItem.title}
                </span>
                {active &&
                <div className={s.items}  >
                    {
                        props.items.map(el => {
                            return <div
                                onMouseEnter={() => setHoveredElemValue(el.value)}
                                className={s.item + ' ' + (hoveredItem == el ? s.selected : '')}
                                key={el.value}
                                onClick={() => onItemClick(el.value)}>{el.title} </div>
                        })
                    }
                </div>
                }
            </div>
        </>
    )
}




