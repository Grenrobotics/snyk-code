// XSS and injection vulnerabilities
export function renderUserContent(html: string) {
  return `<div>${html}</div>`
}

// VULNERABLE: DOM XSS
export function updateDOM(userInput: string) {
  document.write(userInput)
}

// VULNERABLE: Reflected XSS
export function searchResults(query: string) {
  return `<h1>Results for: ${query}</h1>`
}

// VULNERABLE: NoSQL injection
export function findUser(username: string) {
  const query = { username: username }
  // MongoDB query would be vulnerable
  return query
}