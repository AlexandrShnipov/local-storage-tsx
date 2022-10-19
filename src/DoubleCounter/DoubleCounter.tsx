import React, {useEffect, useState} from "react";

type CounterDoublePropsTYpe = {
    title: string
}


export const DoubleCounter = (props: CounterDoublePropsTYpe) => {

    const [count, setCount] = useState(0)

    const countValue = 'countValue';

    useEffect(() => {
        const countString = localStorage.getItem(countValue)
        if (countString) {
            const countValueNew = JSON.parse(countString)
            setCount(countValueNew)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(countValue, JSON.stringify(count))
    }, [count])

    const plusButtonHandler = () => {
        setCount(count + 1)
    }

    const minusButtonHandler = () => {
        setCount(count - 1)
    }

    return (
        <>
            <h1>{props.title}</h1>
            <h3>{count}</h3>
            <button onClick={plusButtonHandler}>+</button>
            <button onClick={minusButtonHandler}>-</button>
        </>

    )
}
