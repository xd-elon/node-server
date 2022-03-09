import { Specification } from "../model/Specification";

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export interface ISpecificationRepository {
  list: any;
  create({ description, name }: ICreateSpecificationDTO);
  findByName(name: string): Specification;
}
