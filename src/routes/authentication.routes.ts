import { Router } from "express";
import { AuthenticateUserController } from "../modules/accounts/useCases/authenticationUser/AuthenticateUserController";

const authtenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authtenticateRoutes.post("/sessions", authenticateUserController.handle);

export { authtenticateRoutes };
