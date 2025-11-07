// Vulnerable SQLite functions for educational purposes
import sqlite3 from 'sqlite3'

const db = new sqlite3.Database(':memory:')

// VULNERABLE: Direct string interpolation
export function getUser(username: string) {
  const query = `SELECT * FROM users WHERE username = '${username}'`
  return new Promise((resolve, reject) => {
    db.all(query, (err, rows) => {
      if (err) reject(err)
      resolve(rows)
    })
  })
}

// VULNERABLE: String concatenation with user input
export function deleteUser(userId: string) {
  const sql = "DELETE FROM users WHERE id = " + userId
  db.run(sql)
}