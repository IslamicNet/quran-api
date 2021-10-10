import { NextFunction, Request, Response } from "express";
import { validateSync } from "class-validator";
import { plainToClass } from "class-transformer";
import BadRequest from "../error/BadRequest.error";

const validateRequest = (DtoClass: any) => {
  return (req: Request, res: Response, next?: NextFunction) => {
    try {
      const requestDto = plainToClass(DtoClass, req.body);

      const errors = validateSync(requestDto);

      if (errors.length) {
        let invalidParams = [];
        for (const error of errors) {
          invalidParams = invalidParams.concat(error.constraints);
        }

        const err = new BadRequest("Bad Request! Invalid request params");
        err.invalidParams = invalidParams;
        err.requestBody = req.body;
        next(err);
      }
    } catch (e) {
      console.log("Error in request validator middleware");
      console.error(e);
    }

    next();
  };
};

export default validateRequest;
