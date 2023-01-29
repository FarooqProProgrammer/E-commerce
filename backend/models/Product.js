const mongoose = require("mongoose")
const schema = mongoose.Schema



const ProductSchema = new schema({
            name:String,
            discription:String,
            price:Number,
            img:String
})      

const Product = mongoose.model("Product",ProductSchema)
module.exports = Product