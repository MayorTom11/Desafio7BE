import { ProductsMongo } from "../dao/managers/productsMongo.js";
import { CartsMongo } from "../dao/managers/cartsMongo.js";
const productDao = new ProductsMongo()
const cartDao = new CartsMongo()
export class ViewsCotroller{
    static renderHome = (req,res)=>{
        res.render("login")
    };

    static renderSignup = (req,res)=>{
        res.render("signup")
    };

    static renderLogin = (req,res)=>{
        res.render("login")
    }

    static renderProducts = (req,res)=>{
        try {
            const {limit=10, page=1, stock,sort} = req.query
            const stockValue = stock === 0 ? undefined : parseInt(stock)
            if(!["asc","desc"].includes(sort)){
                return res.render("products",{error:"Orden no valido"})
            }
            const sortValue = sort === "asc" ? 1 : -1
            let query = {}
            if(stockValue){
                query = {category:"",stock:{$gte:stockValue}}
            }
            const result = productDao.getProductsWithPaginate(query, {page,limit,sort:{price:sortValue},lean:true})
            const baseUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`
            const resultProductsView = {
                status:"success",
                payload: result.docs,
                totalPages: result.totalPages,
                prevPage: result.prevPage,
                nextPage: result.nextPage,
                page: result.page,
                hasPrevPage: result.hasPrevPage,
                hasNextPage: result.hasNextPage,
                prevLink: result.hasPrevPage ? `${baseUrl.replace(`page=${result.page}`,`page=${result.prevPage}`)}` : null,
                nextLink: result.hasNextPage ? `${baseUrl.replace(`page=${result.page}`,`page=${result.nextPage}`)}` : null,
            }
            res.render("products", {user:req.session.userInfo} ,resultProductsView)
            console.log(req.session.userInfo)
        } catch (error) {
            res.render("products",{error:"No es posible visualizar los datos"})
        }
    }

    static renderCarts = (req,res)=>{
        try {
            cartDao.getCarts()
            res.render("carts")
        } catch (error) {
            res.render("carts",{error:"No se encontraron carritos"})
        }
    }

    static renderCartId = (req,res)=>{
        try {
            const cartId = req.params.cartId
            const getCartById = cartDao.getProductsInCart(cartId)
            console.log(getCartById)
        } catch (error) {
            res.render("carts",{error:"No es posible visualizar el carrito"})
        }
    }

    static renderPasswordChange = (req,res)=>{
        res.render("changePassword")
    }
}