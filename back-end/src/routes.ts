import { Router, Request, Response } from "express";

import { CreateUserController } from "./controller/user/CreateUserController";
import { AuthUserController } from "./controller/user/AuthUserController";

const router = Router();

//! --USER ROUTES --
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle)

export { router };
