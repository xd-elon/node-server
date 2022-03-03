import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/service/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();
//
categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description });
  return response.json({ message: "create categories success" }).status(200);
});
//
categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();
  return response.json(all).status(200);
});

export { categoriesRoutes };
