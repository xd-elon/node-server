import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

export class UserRepository implements IUsersRepository {
  create(data: ICreateUserDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
