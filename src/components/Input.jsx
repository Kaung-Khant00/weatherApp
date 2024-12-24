import React, { useRef } from 'react'

export default function input({hundleInput}) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const inputRef = useRef()
  function hundleSubmit(e){
    e.preventDefault()
    hundleInput(inputRef.current.value)
  }
  console.log(hundleInput)
  return (
    <form className='d-flex gap-2' onSubmit={hundleSubmit}>
        <input ref={inputRef} className='form-control' placeholder='Type your place name . . .'/>
        <button className='btn btn-primary'>Search</button>
    </form>
  )
}
