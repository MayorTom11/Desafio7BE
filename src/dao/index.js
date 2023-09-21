import { CartsMongo } from "../dao/managers/cartsMongo.js";
import { ProductsMongo } from "../dao/managers/productsMongo.js";
import { UsersMongo } from "../dao/managers/usersMongo.js";

export const cartDao = new CartsMongo()
export const productDao = new ProductsMongo()
export const usersDao = new UsersMongo()