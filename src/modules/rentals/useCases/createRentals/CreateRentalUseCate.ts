import { AppError } from "@shared/errors/ApeError";

interface IRequest {
  user_id: string;
  car_id: string;
  expected_return_date: Date;
}

class CreateRentalUseCase {
  constructor(private rentalsRepository: IRetalsRepository);

  async execute({
    user_id,
    car_id,
    expected_return_date,
  }: IRequest): Promise<void> {
    const carAvailable = await this.rentalsRepository.findOpenRentalByCar(
      car_id
    );

    if (carAvailable) {
      throw new AppError("Car is unavailable");
    }
    // não deve ser possivel cadastrar um novo alugel caso ja exista um para o mesmo usuario
    const rentalOpenToUser = await this.rentalsRepository.findOpenRentalByUser(
      user_id
    );
    if (rentalOpenToUser) {
      throw new AppError("There`s a rental in progress for user!");
    }
    // minimo de  24h
  }
}

export { CreateRentalUseCase };
