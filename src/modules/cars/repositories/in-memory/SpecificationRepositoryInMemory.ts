import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";

import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationRepository";

export class SpecificationReposotoryInMemory
  implements ISpecificationsRepository
{
  specifications: Specification[] = [];

  list(): Promise<Specification[]> {
    throw new Error("Method not implemented.");
  }
  async create({
    description,
    name,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = new Specification();

    Object.assign(specification, {
      description,
      name,
    });

    this.specifications.push(specification);

    return specification;
  }
  async findByName(name: string): Promise<Specification> {
    return this.specifications.find(
      (specification) => specification.name === name
    );
  }
  async findByIds(ids: string[]): Promise<Specification[]> {
    const allSpecifications = this.specifications.filter((specification) =>
      ids.includes(specification.id)
    );

    return allSpecifications;
  }
}
