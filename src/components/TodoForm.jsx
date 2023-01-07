import { useRef } from "react";



export default function TodoForm({add}) {
  const inputRef = useRef();

  return (
  <div><input ref={inputRef} />
    <button onClick={click}> click </button>
  </div>
  );

  function click() {
   add(inputRef.current.value);
  }
}

