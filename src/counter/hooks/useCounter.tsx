import { useState } from "react";


export const useCounter = (initiaLvalue: number = 10) => {
    const [counter, setCounter] = useState(initiaLvalue);

    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleSubstract = () => {
        setCounter(counter - 1);
    }
    const handleReset = () => {
        setCounter(5);
    }

    return {
        counter,
        handleAdd,
        handleSubstract,
        handleReset
    }
}