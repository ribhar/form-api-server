let formDataStore = [];

const submitForm = (req, res) => {
  const { name, email, age, gender, comment } = req.body;

  if (!name || !email || !age || !gender) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  const newEntry = {
    id: Date.now().toString(),
    name, 
    email,
    age,
    gender,
    comment,
  };

  formDataStore.push(newEntry);

  res.status(201).json({ message: 'Form submitted successfully.', entry: newEntry });
};

const getAllData = (req, res) => {
  res.status(200).json({ data: formDataStore });
};

const updateEntry = (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const index = formDataStore.findIndex((entry) => entry.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Entry not found.' });
  }

  // Update only the provided fields
  formDataStore[index] = {
    ...formDataStore[index],
    ...updates,
  };

  res.status(200).json({ message: 'Entry updated successfully.', entry: formDataStore[index] });
};

const deleteEntry = (req, res) => {
  const { id } = req.params;
  const index = formDataStore.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Entry not found.' });
  }

  formDataStore.splice(index, 1);

  res.status(200).json({ message: 'Entry deleted successfully.' });
};

module.exports = {
  submitForm,
  getAllData,
  updateEntry,
  deleteEntry,
  formDataStore,
};
