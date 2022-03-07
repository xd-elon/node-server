import { Specification } from "../model/Specification";

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export interface ISpecificationRepository {
  [x: string]: any;
  create({ description, name }: ICreateSpecificationDTO);
  findByName(name: string): Specification;
}
