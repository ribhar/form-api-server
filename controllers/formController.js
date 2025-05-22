let formDataStore = [];

const submitForm = (req, res) => {
  const { name, email, age, gender, comment } = req.body;

  if (!name || !email || !age || !gender) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  const newEntry = { id: Date.now(), name, email, age, gender, comment };
  formDataStore.push(newEntry);

  res.status(201).json({ message: 'Form submitted successfully.', entry: newEntry });
};

module.exports = { submitForm, formDataStore };
