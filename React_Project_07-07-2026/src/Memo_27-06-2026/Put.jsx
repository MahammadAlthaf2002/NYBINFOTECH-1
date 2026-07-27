async function updateUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
        name: "John Updated",
        email: "john@gmail.com",
      }),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

updateUser();