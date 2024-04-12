import React from 'react'
import { MdError } from "react-icons/md";

const Error = () => {
  return (
    <div className='text-3xl flex justify-center items-center gap-4'>
      <MdError className='text-4xl'/>
      <p>Please Try again!!!</p>
    </div>
  )
}

export default Error
