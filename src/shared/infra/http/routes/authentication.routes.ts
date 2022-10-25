import { Router } from "express";

import { AuthenticateUserController } from "@modules/accounts/useCases/authenticationUser/AuthenticateUserController";
import { RefreshTokenController } from "@modules/accounts/useCases/refreshToken/RefreshTokenController";

const authtenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();

authtenticateRoutes.post("/sessions", authenticateUserController.handle);
authtenticateRoutes.post("/refresh-token", refreshTokenController.handle);

export { authtenticateRoutes };
