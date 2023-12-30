import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/categories/CreateCategoryService";

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const createCategoryServer = new CreateCategoryService();

    const category = await createCategoryServer.execute({ name });

    return res.json(category);
  }
} // F404

export { CreateCategoryController };
