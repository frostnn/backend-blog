class HttpError  extends Error{
  constructor(message, httpError = 500) {
    super();
    this.httpStatus = httpError;
  }
}

export default HttpError;