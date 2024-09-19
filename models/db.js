// models/db.js
const sql = require('mssql');

// SQL Server configuration
const config = {
  user: 'sa',           // SQL Server username
  password: '123456789',       // SQL Server password
  server: 'localhost',           // SQL Server host (e.g., localhost or IP address)
  database: 'eventmanagement',       // Database name
  options: {
    encrypt: false,                 // Use encryption if needed (e.g., for Azure SQL)
    trustServerCertificate: true,  // Required if using a self-signed certificate
  },
};

// Connect to SQL Server and export the pool instance
const poolPromise = sql.connect(config)
  .then(pool => {
    console.log('Connected to SQL Server');
    return pool;
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });

module.exports = {
  sql, 
  poolPromise
};
