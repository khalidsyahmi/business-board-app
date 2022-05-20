/* const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
 */
const mysql = require('mysql2/promise');

let pool;

async function initDb() {
  pool = mysql.createPool({
    host: 'localhost',
    database: 'forum-mod-app',
    user: 'root',
    password: 'khalid71096!'
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