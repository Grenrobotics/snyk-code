import { NextRequest, NextResponse } from 'next/server'
import mysql from 'mysql2/promise'

// VULNERABLE: Direct SQL injection in API route
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get('username')
  
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'users_db'
  })
  
  // VULNERABLE: String concatenation SQL injection
  const query = "SELECT * FROM users WHERE username = '" + username + "'"
  const [rows] = await connection.execute(query)
  
  return NextResponse.json(rows)
}

export async function POST(request: NextRequest) {
  const { username, password } = await request.json()
  
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'password',
    database: 'users_db'
  })
  
  // VULNERABLE: Template literal injection
  const sql = `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`
  await connection.execute(sql)
  
  return NextResponse.json({ success: true })
}