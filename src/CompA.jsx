import React from 'react'
import CompB from './CompB'

const CompA = ({user,age}) => {
  return (
    <>
    <div>hello i am {user.name} {user.lastname} and my age is {age}</div>
    <br />
    <CompB />
    </>
  )
}

export default CompA