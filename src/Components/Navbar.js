import { NavLink } from 'react-router-dom'
import auth, { useAuth } from './auth'
const Navbar = () => {
  const  navLinkStyle=({isActive})=>{
    return {
      fontWeight:isActive ? 'Bold' : 'normal',
      textDecoration:isActive ? 'none' : 'underline'
    }
  }

  const auth=useAuth()
  return (
    <nav className='primary-nav'>
    <NavLink  style={navLinkStyle} to='/'>Home</NavLink>
    <NavLink style={navLinkStyle} to='/about'>About</NavLink>
    <NavLink style={navLinkStyle} to='/products'>Products</NavLink>
    <NavLink style={navLinkStyle} to='/profile'>Profile</NavLink>
    {
      !auth.user && <NavLink style={navLinkStyle} to='/login'>Login</NavLink>
    }

  </nav>
  )
}

export default Navbar