import { CartsService } from "../services/carts.service.js"
export class CartsController{
    static addCart = async(req,res)=>{
        try {
            const cartInfo = req.body
            await CartsService.addCart(cartInfo)
            res.json({message:"Carrito Agregado"})
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static getCartId = async(req,res)=>{
        try {
            const cartId = req.params.cartId
            const getCartById = await CartsService.getProductsInCart(cartId)
            getCartById ? res.json(getCartById) : res.json("El carrito buscado no fue encontrado")
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static updateCart = async(req,res)=>{
        try {
            const cartId = req.params.cartId
            const newCart = req.body
            await CartsService.updateCart(cartId, newCart)
            res.json({status:"success", message:"Carrito actualizado"})
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static updateProductInCart = async(req,res)=>{
        try {
            const cartId = req.params.cartId
            const productId = req.params.productId
            const {quantity} = req.body
            await CartsService.updateProductsInCart(cartId, productId, quantity)
            res.json({status:"success", message:"Cantidad actualizada"})
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static deleteProductInCart = async(req,res)=>{
        try {
            const cartId = req.params.cartId
            const productId = req.params.productId
            await CartsService.deleteProductInCart(cartId, productId)
            res.json({status:"success", message:"Producto eliminado del carrito"})
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static deleteCart = async(req,res)=>{
        try {
            const cartId = req.params.cartId
            await CartsService.deleteCart(cartId)
            res.json({status:"success", message:"Carrito eliminado"})
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}