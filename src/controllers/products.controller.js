import { ProductsService } from "../services/products.service.js"
export class ProductsController{
    static getProducts = async (req,res)=>{
        try {
            let limit = req.query.limit
            let page = req.query.page
            let sort = req.query.sort
            if(!limit){
                limit = 10
            }
            if(!page){
                page = 1
            }
            const getProducts = await ProductsService.getProducts()
            res.json({status:"success",data:getProducts})
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static getProductId = async (req,res)=>{
        try {
            const productId = req.params.productId
            const getProductById = await ProductsService.getProductById(productId)
            getProductById ? res.json(getProductById) : res.json("El producto buscado no fue encontrado")
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static addProduct = async(req,res)=>{
        try {
            const productInfo = req.body
            const createProduct = await ProductsService.addProduct(productInfo)
            res.json({status:"success",data:createProduct,message:"Producto Agregado"})
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static updateProduct = async(req,res)=>{
        try {
            const updateProduct = req.body
            const productId = req.params.productId
            await ProductsService.updateProduct(productId, updateProduct)
            res.json({message:"Producto modificado"})
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static deleteProduct = async(req,res)=>{
        try {
            const productId = req.params.productId
            await ProductsService.deleteProduct(productId)
            res.json({status:"success", message:"Producto eliminado"})
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}