import mongoose from "mongoose";

const cartsCollection = "carts"
const productsCollection = "products"

const cartSchema = new mongoose.Schema({
	products:[
        {
            productId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:productsCollection,
                required:true,
            },
            quantity:{
                type:Number,
                required:true,
                min:1,
                default:1
            }
        }
    ]
})

export const cartsModel = mongoose.model(cartsCollection, cartSchema)