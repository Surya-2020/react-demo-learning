import { Props } from "./Props";
import { useState } from "react";
export const PropsHandler = () => {

    const [count, setCount] = useState(0);
    function handleEvent() {
        setCount(count + 1);
    }

    return (
    <>
      <Props count={count} handleClick={handleEvent} />
      <Props count={count} handleClick={handleEvent} />
    </>
    );
}