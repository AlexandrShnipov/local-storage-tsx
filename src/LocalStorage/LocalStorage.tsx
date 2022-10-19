import React, {useState} from "react";

type PropsType = {
    title: string
}

export const Counter = (props:PropsType) => {

    const [counter, setCounter] = useState<number>(0)

    const incHandler = () => {
        setCounter(counter + 1)
    }

    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(counter))
        localStorage.setItem('counterValue + 1', JSON.stringify(counter + 1))
    }

    const getToLocalStorageHandler = () => {
        const valueAsString = localStorage.getItem('counterValue')
        if(valueAsString) {
            const valueToCounter = JSON.parse(valueAsString)
            setCounter(valueToCounter)
        }
    }

    const clearLocalStorageHandler = () => {
        return (
            localStorage.clear(),
            setCounter(0)
        )
    }

    const removeItemFromLocalStorageHandler = () => {
        return (
            localStorage.removeItem('counterValue + 1')
        )
    }


    return (
        <>
            <h1>{props.title}</h1>
            <h3>{counter}</h3>
            <button onClick={incHandler}>inc</button>
            <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
            <button onClick={getToLocalStorageHandler}>getToLocalStorage</button>
            <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
            <button onClick={removeItemFromLocalStorageHandler}>removeItemFromLocalStorage</button>
        </>
    )
}