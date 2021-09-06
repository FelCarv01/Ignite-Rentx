import { Category } from "../../model/category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesReposity: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesReposity.list();
    return categories;
  }
}

export { ListCategoriesUseCase };
