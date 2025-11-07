// Multiple security vulnerabilities for educational purposes
import crypto from 'crypto'
import fs from 'fs'
import { exec } from 'child_process'

// VULNERABLE: Hardcoded credentials
const API_KEY = "sk-1234567890abcdef"
const DB_PASSWORD = "admin123"
const JWT_SECRET = "supersecret"

// VULNERABLE: Command injection
export function executeCommand(userInput: string) {
  exec(`ls ${userInput}`, (error, stdout) => {
    console.log(stdout)
  })
}

// VULNERABLE: Path traversal
export function readFile(filename: string) {
  return fs.readFileSync(`./uploads/${filename}`, 'utf8')
}

// VULNERABLE: Weak crypto
export function hashPassword(password: string) {
  return crypto.createHash('md5').update(password).digest('hex')
}

// VULNERABLE: Insecure random
export function generateToken() {
  return Math.random().toString(36)
}

// VULNERABLE: XSS via innerHTML
export function renderHTML(userContent: string) {
  document.getElementById('content')!.innerHTML = userContent
}

// VULNERABLE: Prototype pollution
export function merge(target: any, source: any) {
  for (let key in source) {
    target[key] = source[key]
  }
  return target
}