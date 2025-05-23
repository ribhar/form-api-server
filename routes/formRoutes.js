const express = require('express');
const {
  submitForm,
  getAllData,
  updateEntry,
  deleteEntry,
} = require('../controllers/formController');

const router = express.Router();

router.post('/submit', submitForm);
router.get('/data', getAllData);
router.patch('/update/:id', updateEntry);
router.delete('/delete/:id', deleteEntry);

module.exports = router;
