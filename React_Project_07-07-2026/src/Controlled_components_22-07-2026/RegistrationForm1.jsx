import React, { useState } from "react";

const RegistrationForm1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    country: "",
    gender: "",
    agree: false,
    profile: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Registration Successful");
  };

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <label>Name</label><br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br /><br />

        <label>Email</label><br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br /><br />

        <label>Password</label><br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br /><br />

        <label>Address</label><br />
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <br /><br />

        <label>Country</label><br />
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
        </select>
        <br /><br />

        <label>Gender</label><br />

        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
        />
        Male

        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
        />
        Female
        <br /><br />

        <label>Accept Terms</label>

        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
        />
        <br /><br />

        <label>Profile Photo</label><br />

        <input
          type="file"
          name="profile"
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Submit</button>

      </form>
    </div>
  );
};

export default RegistrationForm1;