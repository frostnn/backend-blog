export default function (error, req, res, next) {

  const errorStatus = error.httpStatus || 500
  res.status(errorStatus);
  res.json(errorStatus || 'Unknown error')
  
}