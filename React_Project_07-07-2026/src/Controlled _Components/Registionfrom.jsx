import React, { useState } from "react";

function Controlled5() {

  const [form, setForm] = useState({

    name: "",

    email: "",

    city: ""

  });

  const handleChange = (e)=>{

    setForm({

      ...form,

      [e.target.name]: e.target.value

    });

  };

  const handleSubmit=(e)=>{

    e.preventDefault();

    console.log(form);

    alert("Submitted Successfully");

  };

  return (

    <form onSubmit={handleSubmit}>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="city"
        placeholder="City"
        value={form.city}
        onChange={handleChange}
      />

      <br /><br />

      <button type="submit">

        Submit

      </button>

    </form>

  );
}

export default Controlled5;