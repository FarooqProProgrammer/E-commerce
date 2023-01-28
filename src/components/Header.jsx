import React from 'react'
import "./styles/component.css"
import { BsSearch } from "react-icons/bs"
import { Link, NavLink } from "react-router-dom"
export default function Header() {
  return (
    <>
     


     


      <div className="header-bottom">
          

          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle bg-transparent border-0  gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="images/menu.svg" alt="" srcset="" />
              <span className=''> Show Categories</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item text-white p-3 mb-2 " href="#">Action</a></li>
              <li><a className="dropdown-item text-white p-3 mb-2 " href="#">Another action</a></li>
              <li><a className="dropdown-item text-white p-3 mb-2 " href="#">Something else here</a></li>
            </ul>
          </div>


            <div className="menu-links ps-5">
                <NavLink className={"text-white px-4"} to={"/"}>Home</NavLink>
                <NavLink className={"text-white px-4"} to={"/"}>Our Store</NavLink>
                <NavLink className={"text-white px-4"} to={"/"}>Blogs</NavLink>
                <NavLink className={"text-white px-4"} to={"/"}>Contact</NavLink>
                
            </div>
      
      </div>
    </>
  )
}
