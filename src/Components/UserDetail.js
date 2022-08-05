import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {
    const {userId}=useParams()
  return (
    <div>User Detail About User {userId}</div>
  )
}

export default UserDetail