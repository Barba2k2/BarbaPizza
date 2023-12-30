import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailsUserService";

class DetailUserController{
  async handle(req: Request, res: Response){
    const detailUserService = new DetailUserService()

    const user = detailUserService.execute()

    return res.json(user)
  }
}

export { DetailUserController };