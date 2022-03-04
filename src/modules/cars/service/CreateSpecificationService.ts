import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepority: ISpecificationRepository) {}

  execeute({ name, description }: IRequest): void {
    const specifivationAlreadyExists =
      this.specificationRepority.findByName(name);

    if (specifivationAlreadyExists) {
      throw new Error(" Specification already exists");
    }

    this.specificationRepority.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationService };
