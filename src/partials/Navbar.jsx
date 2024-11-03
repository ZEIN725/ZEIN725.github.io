import { Box } from "lucide-react"
import { Phone } from "lucide-react"
import { User } from "lucide-react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (

    <div className="navbar bg-base-200">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl space-x-1">
          <div className="avatar">
              <div className="w-6 rounded-lg border-collapseb">
              {/* <img src="lof.jpg"/> */}
            </div>
          </div>
        <span>JustRich</span>
      </a>
    </div>

  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
        <NavLink to={'/'}>
        <User size={19} />
        <span>Profile</span>
        </NavLink>
      </li>
      <li>
          <NavLink to={'/project'}>
          <Box size={19} />
          <span>Project</span>
          </NavLink>
      </li>
      <li>
          <NavLink to={'/contact'}>
          <Phone size={19}/>
          <span>Contact</span>
          </NavLink>
      </li>
    </ul>
  </div>
</div>
  )
}

export default Navbar
