// Network security vulnerabilities
import https from 'https'
import axios from 'axios'

// VULNERABLE: SSRF
export function fetchUrl(url: string) {
  return axios.get(url)
}

// VULNERABLE: Insecure HTTP
export function makeRequest(endpoint: string) {
  return axios.get(`http://api.example.com/${endpoint}`)
}

// VULNERABLE: Certificate validation disabled
const agent = new https.Agent({
  rejectUnauthorized: false
})

export function insecureRequest(url: string) {
  return axios.get(url, { httpsAgent: agent })
}

// VULNERABLE: Open redirect
export function redirect(url: string) {
  window.location.href = url
}

// VULNERABLE: CORS misconfiguration
export const corsOptions = {
  origin: "*",
  credentials: true
}