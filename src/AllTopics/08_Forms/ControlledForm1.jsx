import { useState } from "react";

function ControlledForm1() {
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [message, setMessage] = useState("");

  const handleFirstName = (e) => {
    setfirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setlastName(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault(); // stops page reload
    console.log("Form Submitted");
    console.log(firstname, lastname);


    let data ={
      fullName: {firstname, lastname}};
    console.log(data);

    setMessage(`Welcome ${firstname} ${lastname}`);
    
  
        // clearing input fields
      setFirstName("");
      setLastName("");
;


  };

  return (
    <div>
      <h1>Learn Controlled Form 1</h1>

      <form onSubmit={handleForm}>
        <label htmlFor="firstname">First Name: </label>
        <input
          type="text"
          id="firstname"
          value={firstname}
          onChange={handleFirstName}
        />

        <br />
        <br />

        <label htmlFor="lastname">Last Name: </label>
        <input
          type="text"
          id="lastname"
          value={lastname}
          onChange={handleLastName}
        />

        <br />
        <br />

        <button>Submit</button>
      </form>

      {message && <h2>{message}</h2>}
    </div>
  );
};

export default ControlledForm1;

// Controlled form virtual dom par work karta hai aur Uncontrolled form ye real dom par work karta hai 
