import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      "f76a812d6556b8602cbc874a27363bce"
    ) as IPayload;
    console.log(sub);

    next();
  } catch (error) {
    throw new Error("invalid token !!!");
  }
}
