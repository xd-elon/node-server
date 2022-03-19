import { CategoriesRepository } from "../../repositories/implementetions/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

/* export default (): ListCategoriesController => { */
const categoriesRepository = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
export const listCategoryController = new ListCategoriesController(
  listCategoriesUseCase
);
/* return listCategoryController;
}; */
