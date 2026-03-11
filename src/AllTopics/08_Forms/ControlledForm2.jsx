import { useState } from "react";

const ControlledForm2 = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  

  const handleChange = (e) => {
    let { name, value } = e.target;
    // console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(formData);

    //! to get existing user from local storage , if user are present parse it else initilize with empty array [].
    let users = JSON.parse(localStorage.getItem("users")) || []
    console.log(users);

    //! create user data with id 
    let userData = {...formData, id : Math.random()};

    //! add userData to user array
    users.push(userData);

    // ! set user array to local storage after coberting into json
    localStorage.setItem("users", JSON.stringify(users));

    //! clean input fields
    setFormData({username:"", email:"", password:""}); 
  };


  return (
    <div>
      <h1>Learn Controlled Form 2</h1>
      <p>Manage multiple input with single state</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default ControlledForm2;
