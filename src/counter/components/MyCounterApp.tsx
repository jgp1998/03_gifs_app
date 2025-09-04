import { useCounter } from "../hooks/useCounter";

export const MyCounterApp = () => {
    const { counter, handleAdd, handleSubstract, handleReset } = useCounter();

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',

            }}>
            <h1 style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>

                Counter: {counter} </h1>
            <div style={{
                display: 'flex',
                gap: '10px',
            }}>
                <button onClick={handleAdd}> +1</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleSubstract}> -1</button>
            </div>

        </div >
    );
};
