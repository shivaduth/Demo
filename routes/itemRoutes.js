// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemControllers');

// Define routes and map them to controller functions
router.get('/items', itemController.getItems);
router.post('/items', itemController.createItem);
router.put('/items/:id', itemController.updateItem);
router.delete('/items/:id', itemController.deleteItem);

module.exports = router;
