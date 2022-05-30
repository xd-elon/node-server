import { CreateRentalUseCase } from "./CreateRentalUseCate";

let createRentalUseCase: CreateRentalUseCase;

describe("Create Rental", () => {
  beforeEach(() => {
    createRentalUseCase = new CreateRentalUseCase();
  });

  it("should be able to create to create a new rental", async () => {
    await createRentalUseCase.execute();
  });
});
