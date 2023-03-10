import axios from 'axios';
import React, { useState } from 'react'
import { BsFillCartCheckFill } from "react-icons/bs"
import { useNavigate, useParams } from 'react-router-dom'
import './styles/Single.css'


const SingleProduct = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [counter, setCounter] = useState(1);
    const dataFetch = async () => {
        await axios.post("http://localhost:3100/SingleProduct", {
            id: id
        }).then((res) => {
            console.log(res.data);
            const list = []
            list.push(res.data)
            setData(list)
        }).catch((error) => {
            console.log(error);
        })
        console.log(data);

    }

    React.useEffect(()=>{},[counter])



    const post = () => {
        console.log(data[0]);
        data[0].Quantity = counter
        axios.post("http://localhost:3100/Cart", data).then((res) => {
            console.log(res.data);
        }).catch((error) => {
            console.log(error);
        })
        alert("Successfully added to the cart")
    }


        const AddCart = () =>{
            setCounter(counter + 1)
            data[0].price = Number(data[0].price) + 10
        }
        const RemoveCart=()=>{
            setCounter(counter - 1)
            data[0].price = Number(data[0].price) - 10
        }


    return (
        <>
            <div className="title w-full h-[70px]  bg-[#3498db] flex justify-around items-center">

                <div className="title_text text-2xl font-black text-white" onClick={dataFetch}>
                    Your Favourite Product
                </div>

                <div class="btn-group" role="group" aria-label="Basic example" onClick={() => navigate("/")}>
                    <button type="button" class="btn btn-primary">Buy More</button>
                </div>
                <BsFillCartCheckFill onClick={()=> navigate("/Cart")} size={40} className='text-white'/>
            </div>

            <section class="Product text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

                    {
                        data.map((item) => {
                            return (
                                <>


                                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                        <img class="object-cover object-center rounded h-[300px]" alt="hero" src={item.img} />
                                    </div>
                                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                                            {item.name}
                                        </h1>
                                        <p class="mb-8 leading-relaxed">{item.discription}</p>
                                        <h4 class="mb-8 leading-relaxed">{item.price}</h4>
                                        <div class="flex justify-center">
                                            <button onClick={post} class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Buy</button>
                                        </div>
                                        <div className="">
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <button onClick={RemoveCart} type="button" class="btn btn-primary">-</button>
                                                <p className='pl-3 pr-3 fs-3'>{counter}</p>
                                                <button onClick={AddCart}  type="button" class="btn btn-primary">+</button>
                                            </div>

                                        </div>
                                    </div>


                                </>
                            )
                        })
                    }


                </div>
            </section>
        </>
    )
}

export default SingleProduct