import React from 'react'

export default function Fruite({name, price,soldout}) {
  return (
    <>
      <li>
      {name}==={price} {soldout? "soldOut":""}
      </li>
    </>
  )
}
