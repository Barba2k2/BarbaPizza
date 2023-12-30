import { Router, Request, Response } from "express";

import { CreateUserController } from "./controller/user/CreateUserController";
import { AuthUserController } from "./controller/user/AuthUserController";
import { DetailUserController } from "./controller/user/DetailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

//! --USER ROUTES --
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);

export { router };
