const express = require('express');
const ProductsController = require('../controllers/Products');
const methodNotAllowed = require('../controllers/methodNotAllowed');

const router = express.Router();

router.route('/')
  .post(ProductsController.add)
  .get(ProductsController.getAll)
  .put(methodNotAllowed)
  .delete(methodNotAllowed);

router.route('/:id')
  .post(methodNotAllowed)
  .get(ProductsController.getById)
  .put(ProductsController.update)
  .delete(ProductsController.exclude);

module.exports = router;