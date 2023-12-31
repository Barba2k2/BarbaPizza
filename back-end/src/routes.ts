import { Router, Request, Response } from "express";

import { CreateUserController } from "./controller/user/CreateUserController";
import { AuthUserController } from "./controller/user/AuthUserController";
import { DetailUserController } from "./controller/user/DetailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controller/categories/CreateCategoryController";
import { ListCategoryController } from "./controller/categories/ListCategoryController";
import { CreateProductController } from "./controller/product/CreateProductController";

const router = Router();

//! --USER ROUTES --
router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/me", isAuthenticated, new DetailUserController().handle);

//* -- CATEGORIES ROUTES --
router.post("/category", isAuthenticated, new CreateCategoryController().handle);

router.get("/category", isAuthenticated, new ListCategoryController().handle);

//! -- PRODUCTS ROUTES --
router.post("/product", isAuthenticated, new CreateProductController().handle);

export { router };
