import React, { useState } from 'react';

export default function Form() {
  const [name, setName] = useState("");
  const [obj, setObj] = useState({ name: '' });

  function setObjName(event) {
    event.preventDefault();
    setObj({ name });
  }

  function handleChange(e) {
    setName(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} type="text" value={name} />
        <button onClick={setObjName}>Submit</button>

        <p>Name is {obj.name}</p>
      </form>
    </div>
  );
}
