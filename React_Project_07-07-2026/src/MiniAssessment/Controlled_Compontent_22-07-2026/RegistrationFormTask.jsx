import React, { useState } from "react";

const RegistrationFormTask= () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    country: "",
    gender: "",
    hobby: "",
    agree: false,
    profile: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    let inputValue;

    if (type === "checkbox") {
      inputValue = checked;
    } else if (type === "file") {
      inputValue = files[0];
    } else {
      inputValue = value;
    }

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted Successfully");
  };

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />

        {/* Email */}
        <label>Email:</label>
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />

        {/* Password */}
        <label>Password:</label>
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />

        {/* Address */}
        <label>Address:</label>
        <br />
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
        ></textarea>
        <br />
        <br />

        {/* Country */}
        <label>Country:</label>
        <br />
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
        </select>
        <br />
        <br />

        {/* Gender */}
        <label>Gender:</label>
        <br />

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

        <br />
        <br />

        {/* Hobby */}
        <label>Hobby:</label>
        <br />
        <input
          type="text"
          name="hobby"
          value={formData.hobby}
          onChange={handleChange}
        />
        <br />
        <br />

        {/* Accept Terms */}
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          Accept Terms & Conditions
        </label>

        <br />
        <br />

        {/* File Upload */}
        <label>Profile Photo:</label>
        <br />
        <input
          type="file"
          name="profile"
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationFormTask;