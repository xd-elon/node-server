import { Request, Response } from "express";
import { container } from "tsyringe";

import { DevolutionRentalUseCase } from "./DevolutionRentalUseCase";

export class DevolutionRentalController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;
    const { id } = request.params;

    const devolutionRentalUseCase = container.resolve(DevolutionRentalUseCase);

    devolutionRentalUseCase.execute({
      id,
      user_id: id,
    });

    return response.status(200);
  }
}
