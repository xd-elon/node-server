import { Specification } from "../infra/typeorm/entities/Specification";

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export interface ISpecificationsRepository {
  list(): Promise<Specification[]>;
  create({ description, name }: ICreateSpecificationDTO);
  findByName(name: string): Promise<Specification>;
}
