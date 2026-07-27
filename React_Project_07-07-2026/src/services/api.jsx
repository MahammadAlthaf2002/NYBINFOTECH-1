export async function getUsers() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (!response.ok) {
    throw new Error("Failed to Fetch Data");
  }

  const data = await response.json();
  return data;
}  
