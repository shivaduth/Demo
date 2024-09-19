// models/itemModel.js
const { sql, poolPromise } = require('./db');

// Function to fetch all items from the database
async function getAllItems() {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM your_table'); // Replace 'your_table' with your actual table name
    return result.recordset;
  } catch (error) {
    throw new Error('Error fetching items: ' + error.message);
  }
}

// Function to add a new item
async function addItem(name, description) {
  try {
    const pool = await poolPromise;
    await pool.request()
      .input('name', sql.VarChar, name)
      .input('description', sql.VarChar, description)
      .query('INSERT INTO your_table (name, description) VALUES (@name, @description)');
  } catch (error) {
    throw new Error('Error adding item: ' + error.message);
  }
}

// Function to update an item
async function updateItem(id, name, description) {
  try {
    const pool = await poolPromise;
    await pool.request()
      .input('id', sql.Int, id)
      .input('name', sql.VarChar, name)
      .input('description', sql.VarChar, description)
      .query('UPDATE your_table SET name = @name, description = @description WHERE id = @id');
  } catch (error) {
    throw new Error('Error updating item: ' + error.message);
  }
}

// Function to delete an item
async function deleteItem(id) {
  try {
    const pool = await poolPromise;
    await pool.request()
      .input('id', sql.Int, id)
      .query('DELETE FROM your_table WHERE id = @id');
  } catch (error) {
    throw new Error('Error deleting item: ' + error.message);
  }
}

module.exports = {
  getAllItems,
  addItem,
  updateItem,
  deleteItem,
};
