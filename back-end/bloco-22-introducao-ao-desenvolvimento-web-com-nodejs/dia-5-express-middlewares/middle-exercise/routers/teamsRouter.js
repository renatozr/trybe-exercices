const express = require('express');
const rescue = require('express-rescue');

const teams = require('../middlewares/teams');

const router = express.Router();

router.get('/', rescue(teams.getAll));

router.post('/', [
  teams.validateCountry,
  teams.validateInitials,
  teams.validateName,
  teams.addNew,
]);

module.exports = router;