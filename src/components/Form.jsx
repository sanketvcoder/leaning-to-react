import React from 'react'

export default function Form() {
    function handleChange(){
        console.log("changed occurred")
    }
  return (
    <div>
      <form>
        <input onChange={handleChange} type="text" value="" />
      </form>
    </div>
  )
}
