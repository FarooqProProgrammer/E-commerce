const express = require("express")
const Router = express()
const Product = require("../models/Product")
const Cart = require("../models/Cart")

Router.post("/Add_Product",async (req,res)=>{
    const data = new Product(req.body)
    await data.save()
    res.send({"message":"Data Save Succesfully"})
})

Router.get("/Product",(req,res)=>{
    const users = Product.find();

    users.then((data, err) => {
        res.send(data);
    }).catch(err => {
        res.status(500).send(err)
    });
})

Router.post("/SingleProduct",(req,res)=>{
  Product.findById(req.body.id)
  .then(ProductFound =>{
    if(!ProductFound){
        return res.status(404).end()
    }
    return res.json(ProductFound)
  })
  .catch((error)=>{
    console.log(error);
  })

})
Router.post("/Cart",async(req,res)=>{
  console.log(req.body);
  const data = new Cart(req.body[0])
  await data.save()
  res.send({"message":"Data Save Succesfully",data:data})
})



Router.get("/Cart",(req,res)=>{
  const users = Cart.find();

  users.then((data, err) => {
      res.send(data);
  }).catch(err => {
      res.status(500).send(err)
  });
})
Router.delete("/CartDelete/:id",async (req,res)=>{
  const id = req.params.id
    await  Cart.deleteOne({"_id":id})
    res.send({"Message":"Deleted Success"})
})

// Router.put("/CartUpdate",async (req,res)=>{
//     const data = Cart.findByIdAndUpdate(req.body.id,{price:req.body.price});
    
//     res.send({"message":"Updated Success"})
// })
module.exports = Router