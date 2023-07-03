import { useState } from "react";

const Counter = () => {
  const [click, setCount] = useState(0);

  return (
    <div>
        <p>
      <p>Button clicked ${click} times</p>
      <button onClick={() => setCount(click + 1)}>Clike me</button>
      </p>
    </div>
  );
};

export default Counter;
