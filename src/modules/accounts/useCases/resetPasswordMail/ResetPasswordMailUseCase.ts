import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { IDateProvider } from "@shared/container/providers/DayjsProvider/IDateProvider";
import { AppError } from "@shared/errors/ApeError";
import { hash } from "bcrypt";

interface IRequest {
  token: string;
  password: string;
}

@injectable()
export class ResetPasswordUserCase {
  constructor(
    @inject("UsersTokensRepository")
    private usersTokensRepository: IUsersTokensRepository,
    @inject("DaysjsDateProvider")
    private daysjsDateProvider: IDateProvider,
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ token, password }: IRequest): Promise<void> {
    const userToken = await this.usersTokensRepository.findByRefreshToken(
      token
    );

    if (!userToken) {
      throw new AppError("Token invalid!!");
    }

    if (
      this.daysjsDateProvider.compareIfBefore(
        userToken.expires_date,
        this.daysjsDateProvider.dateNow()
      )
    ) {
      throw new AppError("Token invalid!!");
    }

    const user = await this.usersRepository.findById(userToken.user_id);

    user.password = await hash(password, 8);

    await this.usersRepository.create(user);

    await this.usersTokensRepository.deleteById(userToken.id);
  }
}
