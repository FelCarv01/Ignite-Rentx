import { CategoriesRepository } from "../../repositories/CategoriesRepositoy";
import { ListCategoriesController } from "./listCategoriesController";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";

const categoriesReposity = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesReposity);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);

export { listCategoriesController };
