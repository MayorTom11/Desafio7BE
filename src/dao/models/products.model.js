import mongoose from "mongoose";

const productsCollection = "products"

const productSchema = new mongoose.Schema({
	title:{
        type:String,
        required:true,
        unique:true
    },
	description:String,
    price:{
        type:Number,
        required:true
    },
    thumbnail:String,
    code:{
        type:String,
        required:true,
        unique:true
    },
    stock:Number,
    category:{
        type:String,
        required:true,
        enum:["Aperitifs","Wines"]
    }
})

export const productsModel = mongoose.model(productsCollection, productSchema)