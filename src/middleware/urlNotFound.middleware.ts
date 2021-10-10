import { NextFunction, Request, Response } from "express";
import NotFound from "../error/NotFound.error";

const urlNotFoundMiddleWare = (
  req: Request,
  res: Response,
  next?: NextFunction
) => {
  throw new NotFound("Request URL not found on server, please check the URL");
};

export default urlNotFoundMiddleWare;
