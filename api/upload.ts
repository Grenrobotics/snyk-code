// File upload vulnerabilities
import fs from 'fs'
import path from 'path'

// VULNERABLE: Unrestricted file upload
export function uploadFile(filename: string, content: Buffer) {
  const uploadPath = path.join('./uploads', filename)
  fs.writeFileSync(uploadPath, content)
}

// VULNERABLE: Directory traversal in file operations
export function deleteFile(filepath: string) {
  fs.unlinkSync(`./files/${filepath}`)
}

// VULNERABLE: Deserialization
export function processData(serializedData: string) {
  return eval(`(${serializedData})`)
}

// VULNERABLE: LDAP injection
export function searchUser(username: string) {
  const filter = `(uid=${username})`
  // ldap.search(filter) - would be vulnerable to LDAP injection
  return filter
}