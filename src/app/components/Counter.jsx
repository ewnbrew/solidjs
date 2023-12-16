import { createSignal } from "solid-js";

var Counter = () => {
  const [count, setCount] = createSignal(0);
  console.log(count());
  return
}

export default Counter;