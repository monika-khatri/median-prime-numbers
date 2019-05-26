const EratosthenesService = require('../services/eratosthenes.service');
/**
 * Display medium of prime numbers less than given n in query param
 * @param req
 * @param res
 * @return {object}
 */
exports.getMedianPrimes = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const n = req.query.upperLimit;

  if (n) {
    const median = EratosthenesService.getMedianPrimes(n);
    return res.status(200)
      .json({
        data: median
      });
  } else {
    return res.status(402)
      .json({
        message: 'UpperLimit is required.'
      });
  }
};
