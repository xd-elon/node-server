import { Response, Request } from "express";

import { ListCategoriesUseCase } from "./ListSpecificationsUseCase";

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response) {
    const all = this.listCategoriesUseCase.execute();

    return response.json(all);
  }
}
