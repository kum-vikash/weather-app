import React from 'react'
import Loading from "../../assets/loader.gif"

const Loader = () => {
  return (
    <div>
      <img src={Loading} className='h-24' alt="" />
    </div>
  )
}

export default Loader
