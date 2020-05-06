export default function (error, req, res, next) {

  const errorStatus = error.httpStatus || 500;
  const message = error.message || 'Unknown error'
  res.status(errorStatus);
  res.json(errorStatus || message)
  
}