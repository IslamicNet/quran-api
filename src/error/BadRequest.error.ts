import HttpError from "./HttpError.error";

class BadRequest extends HttpError {
  public statusCode: number = 400;
  public invalidParams: any[];
  public requestBody: any;
}

export default BadRequest;
