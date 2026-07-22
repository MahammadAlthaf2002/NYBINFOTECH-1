import React, { useState } from "react";

const RegistrationForm2 = () => {

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

  const [errors, setErrors] = useState({});

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

    setErrors({
      ...errors,
      [name]: "",
    });

  };

  const validate = () => {

    let newErrors = {};

    if (formData.name === "") {
      newErrors.name = "Name is Required";
    }

    if (formData.email === "") {
      newErrors.email = "Email is Required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Enter Valid Email";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password should contain minimum 6 characters";
    }

    if (formData.address === "") {
      newErrors.address = "Address Required";
    }

    if (formData.country === "") {
      newErrors.country = "Select Country";
    }

    if (formData.gender === "") {
      newErrors.gender = "Select Gender";
    }

    if (!formData.agree) {
      newErrors.agree = "Accept Terms";
    }

    if (formData.profile === null) {
      newErrors.profile = "Choose Profile";
    }

    return newErrors;

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Registration Successful");
      console.log(formData);
    }

  };

  return (
    <div>

      <h2>Registration Form Validation</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <p>{errors.name}</p>

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <p>{errors.email}</p>

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <p>{errors.password}</p>

        <textarea
          placeholder="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <p>{errors.address}</p>

        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>
        <p>{errors.country}</p>

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

        <p>{errors.gender}</p>

        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
        />
        Accept Terms

        <p>{errors.agree}</p>

        <input
          type="file"
          name="profile"
          onChange={handleChange}
        />

        <p>{errors.profile}</p>

        <button type="submit">
          Register
        </button>

      </form>

    </div>
  );
};

export default RegistrationForm2;