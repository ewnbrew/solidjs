import { createSignal, createEffect } from "solid-js";

var Counter = () => {
  const [count, setCount] = createSignal(0);
  
  createEffect(() => {
    console.log(count());
  });

  var tambahCounter = () => {
    setCount(count() + 1);
  }

  var kurangCounter = () => {
    setCount(count() - 1);
    if (count() === -1) {
      alert('cukup bang');
      return;
    }
  }

  return (
    <>
      <div>
        <h3> { count() } </h3>
        <button onclick={ tambahCounter }>Tambah</button>
        <button onclick={ kurangCounter }>Tambah</button>
      </div>
    </>
  )
}

export default Counter;