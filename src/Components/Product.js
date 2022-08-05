import { Outlet} from "react-router-dom"
import { NavLink } from 'react-router-dom'

export const Product = () => {
  return (
      <>
      <div>
      <input type='search' placeholder='search products'/>

      </div>
      <nav>
          <NavLink to='featured'>Featured</NavLink>
          <NavLink to='new'>new</NavLink>

      </nav>
      <Outlet/>
    </>
  )
}

export default Product