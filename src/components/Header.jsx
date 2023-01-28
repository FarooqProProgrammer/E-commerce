import React from 'react'
import "./styles/component.css"
import { BsSearch } from "react-icons/bs"
import { Link, NavLink } from "react-router-dom"
export default function Header() {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>Free Shipping Over $100 & Free Return</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>
                HotLine: <a className='text-white' href="tel:+928264954243">
                  +928264954243
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>


      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h3 className='text-white'>DevCorners</h3>
            </div>
            <div className='col-5'>
              <div className="input-group mb-3">
                <input type="text" className="form-control py-2" placeholder="Search Product Here." aria-label="Search Product Here." aria-describedby="basic-addon2" />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className='fs-6' />
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>

                <div>
                  <a className='d-flex align-items-center gap-10 text-white'>
                  <img src="images/compare.svg" alt="compare" srcset="" />
                    <p className='mb-0'> Compare <br/> Products</p>
                  </a>
                </div>
                <div>
                <a className='d-flex align-items-center gap-10 text-white'>
                  <img src="images/wishlist.svg" alt="Wishlist" srcset="" />
                    <p className='mb-0'> Favourite <br/> Wishlist</p>
                  </a>
                </div>
                <div>
                <a className='d-flex align-items-center gap-10 text-white'>
                  <img src="images/user.svg" alt="user" srcset="" />
                    <p className='mb-0'> Login <br/> Account</p>
                  </a>
                </div>
                <div>
                <a className='d-flex align-items-center gap-10 text-white'>
                  <img src="images/cart.svg" alt="cart" srcset="" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className='mb-0'>$ 500</p>
                    </div>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </header>


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
