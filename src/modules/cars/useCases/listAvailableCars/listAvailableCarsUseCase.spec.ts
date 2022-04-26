import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListCarsUseCase } from "./listAvailableCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("list cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    const car = carsRepositoryInMemory.create({
      name: "car1",
      description: "Car desc",
      daily_rate: 140.0,
      license_plate: "DEF-1234",
      fine_amount: 40,
      brand: "car_brand",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({});

    console.log(cars);

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = carsRepositoryInMemory.create({
      name: "car2",
      description: "Car desc",
      daily_rate: 140.0,
      license_plate: "DEF-1235",
      fine_amount: 100,
      brand: "Audi",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      brand: "Audi",
    });

    console.log(cars);

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = carsRepositoryInMemory.create({
      name: "car3",
      description: "Car desc",
      daily_rate: 140.0,
      license_plate: "DEF-1236",
      fine_amount: 100,
      brand: "Audi",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      name: "car3",
    });

    console.log(cars);

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = carsRepositoryInMemory.create({
      name: "car3",
      description: "Car desc",
      daily_rate: 140.0,
      license_plate: "DEF-1237",
      fine_amount: 100,
      brand: "Audi",
      category_id: "12345",
    });

    const cars = await listCarsUseCase.execute({
      category_id: "12345",
    });

    console.log(cars);

    expect(cars).toEqual([car]);
  });
});
