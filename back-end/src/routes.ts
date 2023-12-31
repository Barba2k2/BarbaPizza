import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controller/user/CreateUserController";
import { AuthUserController } from "./controller/user/AuthUserController";
import { DetailUserController } from "./controller/user/DetailUserController";

import { CreateCategoryController } from "./controller/categories/CreateCategoryController";
import { ListCategoryController } from "./controller/categories/ListCategoryController";

import { CreateProductController } from "./controller/product/CreateProductController";
import { ListByCategoryController } from "./controller/product/ListByCategoryController";

import { CreateOrderController } from "./controller/order/CreateOrderController";
import { RemoveOrderController } from "./controller/order/RemoveOrderController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import uploadConfig from '../src/config/multer'

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

//! --USER ROUTES --
router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/me", isAuthenticated, new DetailUserController().handle);

//* -- CATEGORIES ROUTES --
router.post("/category", isAuthenticated, new CreateCategoryController().handle);

router.get("/category", isAuthenticated, new ListCategoryController().handle);

//! -- PRODUCTS ROUTES --
router.post("/product", isAuthenticated, upload.single("file"), new CreateProductController().handle);

router.get('/category/product', isAuthenticated, new ListByCategoryController().handle);

//! -- ORDERS ROUTES --
router.post('/order', isAuthenticated, new CreateOrderController().handle);

router.delete('/order', isAuthenticated, new RemoveOrderController().handle);

export { router };
