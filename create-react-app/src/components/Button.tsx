import React, { useState } from 'react';

interface ButtonProps {
  color: string;
}

function Button(props: React.PropsWithChildren<ButtonProps>) {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <button type="button" style={{ color: props.color }} onClick={increment}>
      {props.children} - {counter}
    </button>
  );
}

export default Button;
