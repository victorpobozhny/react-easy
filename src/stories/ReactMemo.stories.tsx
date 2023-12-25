import React, {useState} from 'react';
import {Meta} from "@storybook/react";
import {Select} from "../components/Select/Select";

export default {
    title: 'React.memo demo'
}


const NewMessagesCounter = (props: { count: number }) => {
    console.log('counter')
    return (
        <div>
            {props.count}
        </div>
    );
};
const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users')
    return (
        <div>
            {
                props.users.map((el, i) => {
                    return <div key={i}>{el}</div>
                })}
        </div>
    );
};

const Users = React.memo(UsersSecret)
export const Example1 = () => {


    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima', 'Keks', 'Kris'])
    const addUser = () => {
        const newUsers = [...users, 'Sveta']
        setUsers(newUsers)
    }


    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add User</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </div>
    );
};



