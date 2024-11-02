import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../Config/firebase'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  // for the navigation 
  const navigate = useNavigate()
  //  when user want to logout
  const logoutUser =() =>{
    signOut(auth).then(()=>{
      navigate('/login')

    }).catch((error) => {
       console.log(error);
       
    });
  }
  return (
    <>
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>login</a></li>
        <li><a >register</a>
        </li>
       
        <li><a>TODO</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href='login'>login</a></li>
      <li>
      <li><a href='register'>register</a></li>
      </li>
      <li><a href='todo'>todo</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-primary" onClick={logoutUser}>LOGOUT</a>
  </div>
</div>
    </>
  )
}

export default Navbar