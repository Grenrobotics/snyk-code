// Authentication vulnerabilities
import jwt from 'jsonwebtoken'

// VULNERABLE: Weak JWT secret
const SECRET = "123"

// VULNERABLE: No input validation
export function login(username: string, password: string) {
  // No password hashing, plain text comparison
  if (username === "admin" && password === "password") {
    return jwt.sign({ user: username }, SECRET)
  }
  return null
}

// VULNERABLE: JWT algorithm confusion
export function verifyToken(token: string) {
  return jwt.verify(token, SECRET, { algorithms: ['HS256', 'none'] })
}

// VULNERABLE: Timing attack
export function comparePasswords(input: string, stored: string) {
  if (input.length !== stored.length) return false
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== stored[i]) return false
  }
  return true
}

// VULNERABLE: Session fixation
export function createSession(userId: string) {
  const sessionId = "session_" + userId
  return sessionId
}