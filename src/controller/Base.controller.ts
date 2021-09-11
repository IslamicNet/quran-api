import { Express, NextFunction, Request, Response } from "express";
import HttpExpress from "../utils/HttpExpress";

abstract class BaseController {
  private app: Express;

  public constructor() {}

  public initialize(app: Express) {
    this.app = app;
    this.initializeEndpoints();
  }

  protected abstract initializeEndpoints(): void;

  public addEndpoint(
    httpMethod: string,
    route: string,
    fn: (req: Request, res: Response, next?: NextFunction) => any,
    ...middlewares: ((
      req: Request,
      res: Response,
      next?: NextFunction
    ) => any)[]
  ) {
    switch (httpMethod) {
      case "GET":
        middlewares
          ? this.app.get(route, middlewares, fn)
          : this.app.get(route, fn);
        break;
      case "POST":
        middlewares
          ? this.app.post(route, middlewares, fn)
          : this.app.post(route, fn);
        break;
      case "PUT":
        middlewares
          ? this.app.put(route, middlewares, fn)
          : this.app.put(route, fn);
        break;
      case "DELETE":
        middlewares
          ? this.app.delete(route, middlewares, fn)
          : this.app.delete(route, fn);
        break;
    }
  }

  public addAsyncEndpoint(
    httpMethod: string,
    route: string,
    fn: (req: Request, res: Response, next?: NextFunction) => Promise<any>,
    ...middlewares: ((
      req: Request,
      res: Response,
      next?: NextFunction
    ) => any)[]
  ) {
    this.addEndpoint(
      httpMethod,
      route,
      HttpExpress.wrapAsync(fn),
      ...middlewares
    );
  }
}

export default BaseController;
