import React from 'react'
import "./styles/ProductCard.css"
const Products = () => {
    const Product = [
        {
            id: 1,
            name: "Glasses",
            discription:"Beautifull Product",
            price: 1000,
            img:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
        },
        {
            id: 2,
            name: "Chair Set",
            discription:"Beautifull Product",
            price: "$10.00",
            img:"https://images.unsplash.com/photo-1671726203394-3fb856bdd8d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
        },
        {
            id: 3,
            name: "Boot",
            discription:"Beautifull Product",
            price: "$30.00",
            img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
        },
        {
            id: 4,
            name: "Watch",
            discription:"Beautifull Watch",
            price: "$80.00",
            img:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
        },
        {
            id: 5,
            name: "Head Phone",
            discription:"Beautifull Headphone",
            price: "$80.00",
            img:"https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60  "
        },
        
        
        
    ] 
  return (
    <>
            <div className='title mt-5 w-full h-[70px] flex justify-center items-center'> 
                    <p className='text-2xl font-bold text-[#34495e] hover:text-[#bdc3c7]'>Featured Products</p>
            </div>


            <div className='w-full h-auto border-2 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 place-items-center gap-3'>
                    
            
                {
                    Product.map((item)=>{
                        return(
                            <div className='ProductOne w-[300px] h-[430px] border-2'>
                            <div className='img-top'>
                                    <img className='w-full h-[200px]' src={item.img} alt=""/>
                            </div>
                            <div className='card-text w-[70%] mt-4 ml-4'>
                                <p className='text-2xl font-bold'>{item.name}</p>
                                <p className='text-xl font-bold'>{item.discription}</p>
                                <p className='text-2xl font-bold'>{item.price}</p>
                            </div>
                            <button type="button" class="btn btn-info mt-3 ml-4 w-[150px]">Add to cart</button>
                        </div>
                        )
                    })
                }
            
            
                    
                    
            </div>
            
  
    </>
  )
}

export default Products
