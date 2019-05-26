const { Router } = require('express');

const router = Router();

const eratosthenesController = require('../controllers/eratosthenes.controller');

router.get('/', eratosthenesController.getMedianPrimes);

module.exports = router;
