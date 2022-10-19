import React, {useEffect, useLayoutEffect, useState} from "react";

type CounterWithHooksPropsType = {
    title: string
}

export const CounterWithHooks = (props: CounterWithHooksPropsType) => {

    const [value, setValue] = useState<number>(0)

      useEffect(() => {
        let valueString = localStorage.getItem('valueHooks')
        if (valueString) {
            const newValue = JSON.parse(valueString)
            setValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('valueHooks', JSON.stringify(value))
    }, [value])

    const incHandler = () => {
        setValue(value + 1)
    }

    return (
        <>
            <h1>{props.title}</h1>
            <h3>{value}</h3>
            <button onClick={incHandler}>inc</button>
        </>
    )
}
