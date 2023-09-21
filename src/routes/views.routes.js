import { Router } from "express";
import { ViewsCotroller } from "../controllers/views.controller.js";

const router = Router()

router.get("/",ViewsCotroller.renderHome)
router.get("/registro",ViewsCotroller.renderSignup)
router.get("/login",ViewsCotroller.renderLogin)
router.get("/products",ViewsCotroller.renderProducts)
router.get("/carts",ViewsCotroller.renderCarts)
router.get("/carts/:cartId",ViewsCotroller.renderCartId)
router.get("/cambio-password",ViewsCotroller.renderPasswordChange);

export {router as viewsRouter}