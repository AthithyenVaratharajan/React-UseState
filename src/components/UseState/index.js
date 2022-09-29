import { useState } from "react";
import "./UseState.css";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  let [count, setCount] = useState("0");
  return (
    <div className={theme}>
      <button type="button" onClick={() => setTheme("dark")}>
        Dark
      </button>

      <button type="button" onClick={() => setTheme("light")}>
        Light
      </button>
      <h1>{count}</h1>
      <button
        type="button"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default UseState;
