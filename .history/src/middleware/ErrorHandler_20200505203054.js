export default function (error, req, res, next) {
  console.log('Error', error);
  res.status(error.httpStatus || 500);
  res.json(error.message || 'Unknown error')
  res.end();
}