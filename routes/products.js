const express = require('express');
const router = express.Router();
const { getProducts, getProductsById } = require('../controllers/productsController');

router.get('/', getProducts);
router.get('/:id', getProductsById);

module.exports = router;