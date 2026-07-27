async function updateEmail() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "newemail@gmail.com",
      }),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

updateEmail();