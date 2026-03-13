import React, { useRef } from 'react'

const UncontrolledForm = () => {

    // console.log(useRef("")); // {current: undefined}

    const emailRef = useRef("");
    const passwordRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");

        // console.log(emailRef.current.value);
        // console.log(passwordRef.current.value);

        let user = {
            email: emailRef.current.value,
            password : passwordRef.current.value
        }
        console.log(user);
        
    
        };
    

  return (
    <div>
        <h1 className='text-center text-4xl'>Uncontrolled Form</h1>


        <form className='flex flex-col items-center p-5' onSubmit={handleSubmit}> 
            <input type="email" placeholder='Enter Email' className='border' ref={emailRef}/>
            <input type="password" placeholder='Enter Password' className='border' ref={passwordRef}/>
            <button className='bg-violet-300 py-1 px-5'>Submit</button>
        </form>
    </div>
  );
};

export default UncontrolledForm;

// Uncontrolled form ka use hota hai taki system bar bar rerender na ho and hame jada tar useState use karna hai aagra useState na work kre ya jada render ho to hame useRef ka use krege,
// Revises Promises