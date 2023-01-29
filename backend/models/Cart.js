const mongoose = require("mongoose")
const schema = mongoose.Schema



const CartSchema = new schema({
            name:String,
            discription:String,
            price:Number,
            img:String,
            Quantity:String
})      

const Cart = mongoose.model("Cart",CartSchema)
module.exports = Cart