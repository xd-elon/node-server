import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListCarsUseCase } from "./listCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("list cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    const car = carsRepositoryInMemory.create({
      name: "carr1",
      description: "Car desc",
      daily_rate: 140.0,
      license_plate: "DEF-1234",
      fine_amount: 40,
      brand: "car_brand",
      category_id: "dcc645e8-1570-4f9f-a49b-9b85e91d76c9",
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = carsRepositoryInMemory.create({
      name: "carr1",
      description: "Car desc",
      daily_rate: 140.0,
      license_plate: "DEF-1234",
      fine_amount: 100,
      brand: "Audi",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      brand: "CAR_BRAND_TEST",
    });

    console.log(cars);

    expect(cars).toEqual([car]);
  });
});
