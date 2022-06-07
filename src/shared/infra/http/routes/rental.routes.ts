import { Router } from "express";

import { CreateRentalController } from "@modules/rentals/useCases/createRentals/CreateRentalController";

import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const rentalRoutes = Router();

const createRentalController = new CreateRentalController();

rentalRoutes.post("/", ensureAuthenticated, createRentalController.handle);

export { rentalRoutes };
