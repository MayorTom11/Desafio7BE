import { Router } from "express";
import { ProductsController } from "../controllers/products.controller.js";

const router = Router()

router.get("/",ProductsController.getProducts)
router.get("/:productId",ProductsController.getProductId)
router.post("/",ProductsController.addProduct)
router.put("/:productId",ProductsController.updateProduct)
router.delete("/:productId",ProductsController.deleteProduct)

export {router as productsRouter}