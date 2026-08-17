import { useState } from "react";
import "./From.css";

function Form() {
  // -----------------------------
  // FORM DATA
  // -----------------------------
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: "",
    dob: "",
    country: "",
    terms: false,
  });

  // -----------------------------
  // DYNAMIC SKILLS
  // -----------------------------
  const [skills, setSkills] = useState([""]);

  // -----------------------------
  // ERRORS
  // -----------------------------
  const [errors, setErrors] = useState({});

  // -----------------------------
  // TOUCHED FIELDS
  // -----------------------------
  const [touched, setTouched] = useState({});

  // -----------------------------
  // SUBMIT STATE
  // -----------------------------
  const [loading, setLoading] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");

  // ==================================================
  // HANDLE INPUT CHANGE
  // ==================================================

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Remove error when user starts correcting field
    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));

    setSuccessMessage("");
  };

  // ==================================================
  // HANDLE BLUR
  // ==================================================

  const handleBlur = (e) => {
    const { name } = e.target;

    setTouched((previousTouched) => ({
      ...previousTouched,
      [name]: true,
    }));

    // Validate individual field
    const validationErrors = validateForm();

    setErrors(validationErrors);
  };

  // ==================================================
  // ADD SKILL
  // ==================================================

  const addSkill = () => {
    setSkills((previousSkills) => [
      ...previousSkills,
      "",
    ]);
  };

  // ==================================================
  // UPDATE SKILL
  // ==================================================

  const updateSkill = (index, value) => {
    setSkills((previousSkills) =>
      previousSkills.map((skill, i) =>
        i === index ? value : skill
      )
    );
  };

  // ==================================================
  // REMOVE SKILL
  // ==================================================

  const removeSkill = (index) => {
    setSkills((previousSkills) =>
      previousSkills.filter(
        (_, i) => i !== index
      )
    );
  };

  // ==================================================
  // VALIDATION
  // ==================================================

  const validateForm = () => {
    const newErrors = {};

    // First Name
    if (!formData.firstName.trim()) {
      newErrors.firstName =
        "First name is required";
    } else if (
      formData.firstName.trim().length < 3
    ) {
      newErrors.firstName =
        "First name must contain at least 3 characters";
    }

    // Last Name
    if (!formData.lastName.trim()) {
      newErrors.lastName =
        "Last name is required";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email =
        "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Enter a valid email address";
    }

    // Password
    if (!formData.password) {
      newErrors.password =
        "Password is required";
    } else if (
      formData.password.length < 6
    ) {
      newErrors.password =
        "Password must contain at least 6 characters";
    }

    // Confirm Password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        "Please confirm your password";
    } else if (
      formData.password !==
      formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone =
        "Phone number is required";
    } else if (
      !/^[0-9]{10}$/.test(formData.phone)
    ) {
      newErrors.phone =
        "Phone number must contain exactly 10 digits";
    }

    // Gender
    if (!formData.gender) {
      newErrors.gender =
        "Please select your gender";
    }

 // Date of Birth
if (!formData.dob) {
  newErrors.dob = "Date of birth is required";
} else {
  const today = new Date();
  const selectedDate = new Date(formData.dob);

  // Remove time from today's date
  today.setHours(0, 0, 0, 0);

  if (selectedDate > today) {
    newErrors.dob = "Date of birth cannot be a future date";
  }
}

    // Country
    if (!formData.country) {
      newErrors.country =
        "Please select your country";
    }

    // Skills
    const validSkills = skills.filter(
      (skill) => skill.trim() !== ""
    );

    if (validSkills.length === 0) {
      newErrors.skills =
        "Please enter at least one skill";
    }

    // Terms
    if (!formData.terms) {
      newErrors.terms =
        "You must accept the terms and conditions";
    }

    return newErrors;
  };

  // ==================================================
  // SUBMIT FORM
  // ==================================================

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);

    // Mark all fields as touched
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      password: true,
      confirmPassword: true,
      phone: true,
      gender: true,
      dob: true,
      country: true,
      terms: true,
      skills: true,
    });

    // Stop if validation fails
    if (
      Object.keys(validationErrors).length > 0
    ) {
      return;
    }

    setLoading(true);
    setSuccessMessage("");

    // Simulating API request
    setTimeout(() => {
      console.log("Registration Data:", {
        ...formData,
        skills,
      });

      setLoading(false);

      setSuccessMessage(
        "Registration completed successfully!"
      );
    }, 1500);
  };

  // ==================================================
  // RESET FORM
  // ==================================================

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      gender: "",
      dob: "",
      country: "",
      terms: false,
    });

    setSkills([""]);
    setErrors({});
    setTouched({});
    setSuccessMessage("");
  };

  return (
    <div className="container">

      <div className="form-card">

        <h1>Registration Form</h1>

        <p className="subtitle">
          Create your account by filling in the
          details below.
        </p>

        {/* SUCCESS MESSAGE */}

        {successMessage && (
          <div className="success">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          {/* ======================================
              FIRST NAME
          ====================================== */}

          <div className="form-group">

            <label>
              First Name
            </label>

            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter first name"
            />

            {touched.firstName &&
              errors.firstName && (
                <p className="error">
                  {errors.firstName}
                </p>
              )}

          </div>

          {/* ======================================
              LAST NAME
          ====================================== */}

          <div className="form-group">

            <label>
              Last Name
            </label>

            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter last name"
            />

            {touched.lastName &&
              errors.lastName && (
                <p className="error">
                  {errors.lastName}
                </p>
              )}

          </div>

          {/* ======================================
              EMAIL
          ====================================== */}

          <div className="form-group">

            <label>
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter email"
            />

            {touched.email &&
              errors.email && (
                <p className="error">
                  {errors.email}
                </p>
              )}

          </div>

          {/* ======================================
              PASSWORD
          ====================================== */}

          <div className="form-group">

            <label>
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter password"
            />

            {touched.password &&
              errors.password && (
                <p className="error">
                  {errors.password}
                </p>
              )}

          </div>

          {/* ======================================
              CONFIRM PASSWORD
          ====================================== */}

          <div className="form-group">

            <label>
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Confirm password"
            />

            {touched.confirmPassword &&
              errors.confirmPassword && (
                <p className="error">
                  {errors.confirmPassword}
                </p>
              )}

          </div>

          {/* ======================================
              PHONE
          ====================================== */}

          <div className="form-group">

            <label>
              Phone Number
            </label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter 10 digit phone number"
            />

            {touched.phone &&
              errors.phone && (
                <p className="error">
                  {errors.phone}
                </p>
              )}

          </div>

          {/* ======================================
              GENDER
          ====================================== */}

          <div className="form-group">

            <label>
              Gender
            </label>

            <div className="radio-group">

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={
                    formData.gender === "Male"
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                Male
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={
                    formData.gender === "Female"
                  }
                  onChange={handleChange}
                />

                Female
              </label>

            </div>

            {touched.gender &&
              errors.gender && (
                <p className="error">
                  {errors.gender}
                </p>
              )}

          </div>

          {/* ======================================
              DATE OF BIRTH
          ====================================== */}

          <div className="form-group">

            <label>
              Date of Birth
            </label>

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.dob &&
              errors.dob && (
                <p className="error">
                  {errors.dob}
                </p>
              )}

          </div>

          {/* ======================================
              COUNTRY
          ====================================== */}

          <div className="form-group">

            <label>
              Country
            </label>

            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              onBlur={handleBlur}
            >

              <option value="">
                Select Country
              </option>

              <option value="India">
                India
              </option>

              <option value="USA">
                USA
              </option>

              <option value="UK">
                UK
              </option>

              <option value="Canada">
                Canada
              </option>

            </select>

            {touched.country &&
              errors.country && (
                <p className="error">
                  {errors.country}
                </p>
              )}

          </div>

          {/* ======================================
              DYNAMIC SKILLS
          ====================================== */}

          <div className="form-group">

            <label>
              Skills
            </label>

            {skills.map((skill, index) => (

              <div
                className="skill-row"
                key={index}
              >

                <input
                  type="text"
                  value={skill}
                  onChange={(e) =>
                    updateSkill(
                      index,
                      e.target.value
                    )
                  }
                  placeholder="Enter a skill"
                />

                {skills.length > 1 && (

                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() =>
                      removeSkill(index)
                    }
                  >
                    Remove
                  </button>

                )}

              </div>

            ))}

            <button
              type="button"
              className="add-btn"
              onClick={addSkill}
            >
              + Add Skill
            </button>

            {touched.skills &&
              errors.skills && (
                <p className="error">
                  {errors.skills}
                </p>
              )}

          </div>

          {/* ======================================
              TERMS
          ====================================== */}

          <div className="terms">

            <label>

              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              I accept the terms and conditions

            </label>

            {touched.terms &&
              errors.terms && (
                <p className="error">
                  {errors.terms}
                </p>
              )}

          </div>

          {/* ======================================
              BUTTONS
          ====================================== */}

          <div className="button-group">

            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >

              {loading
                ? "Registering..."
                : "Register"}

            </button>

            <button
              type="button"
              className="reset-btn"
              onClick={handleReset}
            >
              Reset
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default Form;