import { CustomApiError } from "./customApiError";

class InternalServerError extends CustomApiError {
  statusCode = 500;
  constructor(message: string = 'Something went wrong!') {
    super(message);
  }
}

export { InternalServerError };
