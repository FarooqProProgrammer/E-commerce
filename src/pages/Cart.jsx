import React, { useEffect, useState } from 'react'
import { AiFillDelete } from "react-icons/ai"
import "./styles/Cart.css"
import axios from 'axios';



export default function Cart() {
  const [cart, setCart] = useState([]);
  const [Price, setPrice] = useState()

  const dataFetch = async () => {

    await axios.get("http://localhost:3100/Cart").then((res) => {
      console.log(res.data);
      const cart = [...res.data]
      // console.log(list);
      setCart(cart)
    }).catch((error) => {
      console.log(error);
    })
  }



  async function price() {
    const Price = await cart.map((item) => {
      return Number(item.price)
    })

    const sum = Price.reduce((partialSum, a) => partialSum + a, 0);
    console.log(sum);
    setPrice(sum)



  }
  useEffect(() => {
    dataFetch()
    console.log(cart);

  }, [])

  const MinusFromCart = (id) =>{
    axios.delete(`http://localhost:3100/CartDelete/${id}`)
  }
  useEffect(() => {
    price()
  }, [cart])
  return (
    <div className='w-full h-[400px] '>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope='col'>Quantity</th>
          </tr>
        </thead>
        <tbody>

          {cart.map((item, index) => {
            return (
              <tr>

                <th scope="row">{index + 1}</th>
                <td>
                  <div className="img w-[30px] h-[30px] border-2 rounded-full relative">
                    <AiFillDelete onClick={()=> MinusFromCart(item._id)} className='absolute -top-2 text-xl -right-3 text-[#3498db]'/>
                    <img src={item.img} className='w-[30px] h-[30px] rounded-full' alt="" />
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.Quantity}</td>

              </tr>
            )
          })}
          <tr>
            <td colSpan={"3"}></td>
            <td>Total Quantity</td>
            <td>{Price}</td>
          </tr>

        </tbody>
      </table>

    </div>
  )
}
