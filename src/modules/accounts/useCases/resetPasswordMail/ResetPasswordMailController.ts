import { Request, Response } from "express";
import { container } from "tsyringe";

import { ResetPasswordUserCase } from "./ResetPasswordMailUseCase";

export class ResetPasswordUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { token } = request.query;
    const { password } = request.body;

    const resetPasswordUserUseCase = container.resolve(ResetPasswordUserCase);

    await resetPasswordUserUseCase.execute({ token: String(token), password });

    return response.send();
  }
}
