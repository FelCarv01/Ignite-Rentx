import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./listCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}
  handle(req: Request, res: Response): Response {
    const allCategories = this.listCategoriesUseCase.execute();

    return res.status(200).json(allCategories);
  }
}
export { ListCategoriesController };
