import React from 'react'
import { Outlet,useSearchParams } from 'react-router-dom'
const User = () => {
  const [searchParms,setSearchParams]=useSearchParams()
  const showActiveUsers=searchParms.get('filter') === 'active'
  return (
      <>
    <h1>User1</h1>
    <h1>User2</h1>
    <h1>User3</h1>
    <Outlet/>
    <div>
      <button onClick={()=>setSearchParams({filter:'active'})}>Active User</button>   
      <button onClick={()=>setSearchParams({})}>Reset User</button>

    </div>
    {showActiveUsers ?(<h2>Showing Active User</h2>) :(<h2>Showing All User</h2>)}
    </>
  )
}

export default User