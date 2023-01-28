import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const { id } = useParams();

    
 
    return (
        <div className='w-full h-[470px] border-2 border-black grid lg:grid-cols-2 md:grid-col-1 sm:grid-cols-1 place-items-center'>
                <div className="image w-[300px] h-[300px] ">
                    {/* <img src={filter.img} className='w-full h-full' alt="" /> */}
                </div>
        </div>
    )
}

export default SingleProduct