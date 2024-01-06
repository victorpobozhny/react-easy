import React, {useCallback, useMemo, useState} from 'react';
import {Meta} from "@storybook/react";
import {Select} from "../components/Select/Select";
import {log} from "util";
import {v1} from "uuid";

export default {
    title: 'UseMemo demo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultB = 1


    const resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                let f = Math.random()
            }


            tempResultA *= i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }
    return (
        <div>
            <input value={a} onChange={(e) => {
                setA(+e.currentTarget.value)
            }}/>
            <input value={b} onChange={(e) => {
                setB(+e.currentTarget.value)
            }}/>
            <hr/>
            <div>result for a {resultA}</div>
            <div>result for b {resultB}</div>
        </div>
    );
};


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
export const HelpsToReactMemo = () => {
    console.log('Helps to react memo')

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima', 'Keks', 'Kris', 'Vasya'])
//из-за фильтра у нас каждый раз создавался новый массив, поэтому происходила перерисовка и компоненты Users даже когда
    // сами users не менялись. поэтому добавили в useMemo, указав зависимость от массива users. теперь каждый раз будет
    // браться из кеша кроме того случая, если изменится users
    const memoisedUsers = useMemo(() => {
        return users.filter(el => el.toLowerCase().indexOf('a') > -1)
    }, [users])
    const addUser = () => {
        const newUsers = [...users, 'Sveta']
        setUsers(newUsers)
    }

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <button onClick={addUser}>add User</button>
            <Users users={memoisedUsers}/>
        </div>
    );
};


export const UseCallback = () => {
    console.log('Helps to react memo')

    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'Css', 'HTML'])
//из-за фильтра у нас каждый раз создавался новый массив, поэтому происходила перерисовка и компоненты Users даже когда
    // сами users не менялись. поэтому добавили в useMemo, указав зависимость от массива users. теперь каждый раз будет
    // браться из кеша кроме того случая, если изменится users
    const memoisedBooks = useMemo(() => {
        return books.filter(el => el.toLowerCase().indexOf('c') > -1)
    }, [books])

    const callbackForBooks = useCallback(() => {
        const newBooks = [...books, `newBook name with count: #${Math.floor(Math.random() * 10)}`]
        setBooks(newBooks)
    }, [books])

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Books books={memoisedBooks} callback={callbackForBooks}/>
        </div>
    );
};
type BookSecretProps = {
    books: Array<string>
    callback: () => void
}
const BooksSecret = (props: BookSecretProps) => {
    console.log('books')
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <div>
            <button onClick={onClickHandler}>+</button>
            {
                props.books.map((el, i) => {
                    return <div key={i}>{el}</div>
                })}

        </div>
    );
};
const Books = React.memo(BooksSecret)

type Count = {
    count: number
}


const CountMemo = (props: Count) => {
    console.log('count rendered')

    return (
        <div>
            {props.count}
        </div>
    );
};
const Count = React.memo(CountMemo)
type CitiesType = {
    cities: CityType[]
}
type CityType = {
    name: string
    id: string
    population: number
}
const CitiesMemo = (props: CitiesType) => {
    console.log('cities rendered')

    return (
        <div>
            {props.cities.map(el => {
                return <div key={el.id}>{el.name}</div>
            })}
        </div>
    );
};

const Cities = React.memo(CitiesMemo)

export const Training = () => {
    console.log('training rendered')
    const [cities, setCities] = useState<CityType[]>([
        {id: v1(), name: 'Minsk', population: 2000000},
        {id: v1(), name: 'Moscow', population: 10000000},
        {id: v1(), name: 'Kiev', population: 3000000},
        {id: v1(), name: 'Berlin', population: 2000000},
        {id: v1(), name: 'Warshaw', population: 2000000},
        {id: v1(), name: 'Tokyo', population: 20000000},
        {id: v1(), name: 'Rome', population: 3000000},
        {id: v1(), name: 'Brest', population: 200000},
        {id: v1(), name: 'LA', population: 15000000},
        {id: v1(), name: 'NY', population: 20000000}

    ])


    const addCity = () => {
        setCities([...cities, {
            id: v1(),
            name: `New Random City #${Math.floor(Math.random() * 10)}`,
            population: Math.random() * 1000000
        }])
    }

    const smallCities = useMemo(() => {
        return cities.filter(el => el.population < 1000000)
    }, [cities])
    const bigCities = useMemo(() => {
        return cities.filter(el => el.population > 1000000)
    }, [cities])

    const [count, setCount] = useState(0)

    const addCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={addCount}>addCount</button>
            <button onClick={addCity}>addCity</button>
            <Count count={count}/>
            <Cities cities={smallCities}/>
            <hr/>
            <Cities cities={bigCities}/>
        </div>
    );
};






