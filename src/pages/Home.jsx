import React from 'react'
import "./styles/page.css"
import {AiOutlineSearch} from "react-icons/ai"
import Products from '../components/Products'

export default function Home() {
  return (
    <>
      <div className='hero relative flex justify-center items-center'>
        <img className='w-full h-full absolute -z-10' src="./images/main-banner.jpg" alt="" />

        <div className='w-[80%] '>
          <div class="input-group mb-3 h-[50px]">
            <input placeholder='Search Your Favourite Products' type="text" class="form-control" aria-label="Text input with dropdown button" />
            <button class="btn btn-outline-secondary " type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <AiOutlineSearch/>
            </button>
           
          </div>
        </div>


      </div>


        <Products/>


    </>
  )
}
