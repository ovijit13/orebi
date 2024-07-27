import React from 'react'

// eslint-disable-next-line react/prop-types
const Container = ({children, classname}) => {
  return (
    <div className={`max-w-[1320px] mx-auto ${classname}`}>{children}</div>
  )
}

export default Container