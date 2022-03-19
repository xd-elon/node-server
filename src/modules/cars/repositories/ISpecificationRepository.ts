import { Specification } from "../entities/Specification";

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export interface ISpecificationsRepository {
  list: any;
  create({ description, name }: ICreateSpecificationDTO);
  findByName(name: string): Specification;
}
