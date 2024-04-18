import { useState } from 'react'

export const Handlers = () => {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    return (
        <>
            <button onClick={handleClick}> Clicked the counter {count} times</button>
        </>
    );
}