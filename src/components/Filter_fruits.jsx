import React from 'react';
import fruit_obj from './obj';

export default function Filter_fruits() {
  return (
    <>
      {fruit_obj.map((each, index) => (
        <li key={index}>
          {each.name}======= {each.price}
        </li>
      ))}
    </>
  );
}
