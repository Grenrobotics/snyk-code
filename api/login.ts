// Vulnerable API endpoint for educational purposes
import mysql from 'mysql2'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'vulnerable_db'
})

// VULNERABLE: SQL Injection via string concatenation
export function loginUser(username: string, password: string) {
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error)
      resolve(results)
    })
  })
}

// VULNERABLE: No input sanitization
export function getUserData(userId: string) {
  const sql = "SELECT * FROM user_data WHERE user_id = " + userId
  return connection.query(sql)
}