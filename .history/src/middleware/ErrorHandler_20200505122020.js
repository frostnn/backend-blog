export default function (error, req, res, next) {
  console.log('Error', error);
  res.status(500);
  res.end();
}