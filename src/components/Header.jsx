import React from 'react'
import "./styles/component.css"
import { BsSearch } from "react-icons/bs"
import { Link } from "react-router-dom"
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
                  <Link>
                    <p></p>
                  </Link>
                </div>
                <div>
                  <Link>
                    <p></p>
                  </Link>
                </div>
                <div>
                  <Link>
                    <p></p>
                  </Link>
                </div>
                <div>
                  <Link>
                    <p></p>
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </header>
    </>
  )
}
