import {productDao} from "../dao/index.js"
export class ProductsService{
    static getProducts = async()=>{
        return await productsModel.paginate({},{page:page,limit:limit,sort:sort})
    }

    static getProductById = async(productId)=>{
        return await productDao.getProductById(productId)
    }

    static addProduct = async(productInfo)=>{
        return await productDao.addProduct(productInfo)
    }

    static updateProduct = async(productId, updateProduct)=>{
        return await productDao.updateProduct(productId, updateProduct)
    }

    static deleteProduct = async(productId)=>{
        return await productDao.deleteProduct(productId)
    }
}