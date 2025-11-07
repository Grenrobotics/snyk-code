// Vulnerable database functions for educational purposes
import { Pool } from 'pg'

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'workshop_db',
  password: 'password123',
  port: 5432,
})

// VULNERABLE: Direct string concatenation - SQL Injection
export async function getUserByUsername(username: string) {
  const query = `SELECT * FROM users WHERE username = '${username}'`
  const result = await pool.query(query)
  return result.rows
}

// VULNERABLE: No parameterization
export async function authenticateUser(username: string, password: string) {
  const sql = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'"
  return await pool.query(sql)
}

// VULNERABLE: Dynamic query building
export async function searchUsers(searchTerm: string) {
  let query = "SELECT id, username, email FROM users WHERE 1=1"
  if (searchTerm) {
    query += ` AND username LIKE '%${searchTerm}%'`
  }
  return pool.query(query)
}