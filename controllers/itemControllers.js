// controllers/itemController.js
const itemModel = require('../models/itemModel');

// Get all items
exports.getItems = async (req, res) => {
  try {
    const items = await itemModel.getAllItems();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new item
exports.createItem = async (req, res) => {
  const { name, description } = req.body;
  try {
    await itemModel.addItem(name, description);
    res.status(201).json({ message: 'Item added successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an existing item
exports.updateItem = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    await itemModel.updateItem(id, name, description);
    res.status(200).json({ message: 'Item updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an item
exports.deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    await itemModel.deleteItem(id);
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
