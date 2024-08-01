import React, { useState } from 'react';
import count_obj from './Count_obj';

export default function Message() {
  const [count, setCount] = useState(count_obj.count);

  function handleClick() {
    count_obj.count += 1;
    setCount(count_obj.count); // Update state to trigger re-render
  }

  return (
    <div>
      <button onClick={handleClick}>Click here to render a message</button>
      <h1>{count_obj.count} times button clicked!</h1>
      <button>Submit</button>
    </div>
  );
}
