const express = require('express');
const bookController = require('../controllers/book');

const router = express.Router();

router.route('/')
  .get(bookController.findAll)
  .post(bookController.create);

router.route('/:id')
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.destroy);

module.exports = router;