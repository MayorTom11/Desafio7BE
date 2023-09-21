import { Router } from "express";
import { CartsController } from "../controllers/carts.controller.js";

const router = Router()

router.post("/",CartsController.addCart)
router.get("/:cartId",CartsController.getCartId)
router.put("/:cartId",CartsController.updateCart)
router.put("/:cartId/products/:productId",CartsController.updateProductInCart)
router.delete("/:cartId/products/:productId",CartsController.deleteProductInCart)
router.delete("/:cartId",CartsController.deleteCart)

export {router as cartsRouter}