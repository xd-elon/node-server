import { SpecificationsRepository } from "../../repositories/implementetions/SpecificationRepository";
import { ListCategoriesController } from "./ListSpecificationsController";
import { ListCategoriesUseCase } from "./ListSpecificationsUseCase";

const specificationsRepository = SpecificationsRepository.getIntance();
const listCategoriesUseCase = new ListCategoriesUseCase(
  specificationsRepository
);
export const listSpecificationController = new ListCategoriesController(
  listCategoriesUseCase
);
