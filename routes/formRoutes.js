const express = require('express');
const { submitForm, getAllData  } = require('../controllers/formController');

const router = express.Router();

router.post('/submit', submitForm);

router.get('/data', getAllData);

module.exports = router;
