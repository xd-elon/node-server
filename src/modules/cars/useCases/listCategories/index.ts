import { CategoriesRepository } from "../../repositories/implementetions/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getIntance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
export const listCategoryController = new ListCategoriesController(
  listCategoriesUseCase
);
