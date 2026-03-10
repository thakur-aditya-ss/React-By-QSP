import { useState } from "react";

const Task1ControlledForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [message, setMessage] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleDob = (e) => {
    setDob(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileNo = (e) => {
    setMobileNo(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    let data = {
    fullName: { firstname, lastname },
    dob: { dob },
    email: { email },
    mobileNo: { mobileNo },
  };
  console.log(data);
 

  setMessage(
    `Welcome ${firstname} ${lastname}. Your DOB is ${dob} and Email is ${email} and Mobile Number is ${mobileNo} `,
  );

  //   use for clearing input fields

  setFirstName("");
  setLastName("");
  setDob("");
  setEmail("");
  setMobileNo("");
 };

// ✅ Reset handler for RESET button
  const handleReset = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setDob("");
    setEmail("");
    setMobileNo("");
    setMessage("");
  };

  



  return (
    <div>
      <h1>HTML FORM</h1>

      <form onSubmit={handleForm}>
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          id="firstname"
          value={firstname}
          onChange={handleFirstName}
        />
        <br />
        <br />
        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          id="lastname"
          value={lastname}
          onChange={handleLastName}
        />
        <br />
        <br />
        <label htmlFor="dob">Date of Birth:</label>
        <input type="date" id="dob" value={dob} onChange={handleDob} />
        <br />
        <br />
        <label htmlFor="emailId">Email id:</label>
        <input type="email" id="email" value={email} onChange={handleEmail} />
        <br />
        <br />
        <label htmlFor="mobileNo">Mobile Number:</label>
        <input
          type="mobileNumber"
          id="mobileNo"
          value={mobileNo}
          onChange={handleMobileNo}
        />
        <br />
        <br />

        <button type="submit">SUBMIT</button>

        <button type="button" onClick={handleReset}>RESET</button>

        {message && <h2>{message}</h2>}
      </form>
    </div>
  );
};

export default Task1ControlledForm;
