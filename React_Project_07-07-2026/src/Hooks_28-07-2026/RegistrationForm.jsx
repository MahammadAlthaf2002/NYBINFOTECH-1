import useForm from "../Hooks_28-07-2026/useForm";

function RegistrationForm() {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(values);

    alert("Form Submitted Successfully");

    resetForm();
  };

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={values.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={values.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={values.password}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>

        <button
          type="button"
          onClick={resetForm}
        >
          Reset
        </button>

      </form>
    </div>
  );
}

export default RegistrationForm;