// The test replaces this module with a predictable fake response.
export async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3')
  if (!response.ok) throw new Error('Request failed')
  return response.json()
}
