import React, { useEffect } from 'react'
import "./styles/ProductCard.css"
import { Product } from './Api/Product'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const Products = () => {
    const navigation = useNavigate();
    const [data,setData] = useState([])


    async function Product_data(){
        axios.get("http://localhost:3100/Product").then((res)=>{
            console.log(res.data);
            setData(res.data)
        }).catch((error)=>{
            console.log(error);
        })
        console.log(data);
        
    }
    useEffect(() => {
        Product_data()
                 
    }, [])

  return (
    <>
            <div className='title mt-5 w-full h-[70px] flex justify-center items-center'> 
                    <p className='text-2xl font-bold text-[#34495e] hover:text-[#bdc3c7]'>Featured Products</p>
            </div>


            <div className='w-full h-auto  grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 place-items-center gap-3'>
                    
            
                {
                    data.map((item)=>{
                        return(
                            <div className='ProductOne w-[300px] h-[430px] border-2'>
                            <div className='img-top'>
                                    <img className='w-full h-[200px]' src={item.img} alt=""/>
                            </div>
                            <div className='card-text w-[70%] mt-4 ml-4'>
                                <p className='text-2xl font-bold'>{item.name}</p>
                                <p className='text-[18px] font-bold'>{item.discription}</p>
                                <p className='text-2xl font-bold'>{item.price}</p>
                            </div>
                            <button onClick={()=> navigation(`/SingleProduct/${item._id}`)} type="button" class="btn btn-info mt-3 ml-4 w-[150px]">Add to cart</button>
                        </div>
                        )
                    })
                }
            
            
                    
                    
            </div>
            
  
    </>
  )
}

export default Products
