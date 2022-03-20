import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

export class ListSpecificationsController {
  async handle(request: Request, response: Response) {
    const listCategoriesUseCase = container.resolve(ListSpecificationsUseCase);

    const all = await listCategoriesUseCase.execute();

    return response.json(all);
  }
}
