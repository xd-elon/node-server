import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListRentalsByUserUseCase } from "./ListRentalsByUserUseCase";

class ListRentalsByUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.user;

    const listRentalsByUserCase = container.resolve(ListRentalsByUserUseCase);

    const rentals = await listRentalsByUserCase.execute(id);

    return response.json(rentals);
  }
}

export { ListRentalsByUserController };
