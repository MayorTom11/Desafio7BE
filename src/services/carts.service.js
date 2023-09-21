import {cartDao} from "../dao/index.js"
export class CartsService{
    static addCart = async(cartInfo)=>{
        return await cartDao.addCart(cartInfo)
    }

    static getCartId = async(cartId)=>{
        return await cartDao.getProductsInCart(cartId)
    }

    static updateCart = async(cartId, newCart)=>{
        return await cartDao.updateCart(cartId, newCart)
    }

    static updateProductInCart = async(cartId, productId, quantity)=>{
        return await cartDao.updateProductsInCart(cartId, productId, quantity)
    }

    static deleteProductInCart = async(cartId, productId)=>{
        return await cartDao.deleteProductInCart(cartId, productId)
    }

    static deleteCart = async(cartId)=>{
        return await cartDao.deleteCart(cartId)
    }
}