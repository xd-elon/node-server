import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepority: ISpecificationRepository) {}
  execeute({ name, description }: IRequest): void {
    this.specificationRepority.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationService };
