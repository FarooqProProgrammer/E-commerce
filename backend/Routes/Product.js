const express = require("express")
const Router = express()
const Product = require("../models/Product")

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

module.exports = Router