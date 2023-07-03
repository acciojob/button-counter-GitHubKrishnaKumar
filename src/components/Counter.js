import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Button clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Clike me</button>
    </div>
  );
};

export default Counter;
