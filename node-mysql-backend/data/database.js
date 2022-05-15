/* const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
 */
const mysql = require('mysql2/promise');

let pool;

async function initDb() {
  pool = mysql.createPool({
    host: 'localhost',
    database: 'schema-name',
    user: 'root',
    password: 'your-pw-here'
  });
}

function getDb() {
  if (!pool) {
    throw new Error('Database not connected!');
  }

  return pool;
}

module.exports = {
  initDb: initDb,
  getDb: getDb
};