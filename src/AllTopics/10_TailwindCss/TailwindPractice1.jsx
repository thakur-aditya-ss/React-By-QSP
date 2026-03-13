import React from "react";

//  Tailwind css jo kam karta hai Mobikle First ke liye kam karta hai and bootstrap me utne color nhi hai jitne taiwind me hai

const TailwindPractice1 = () => {
  return (
    <div>
        {/* predefine me me jo font size hame chahiye aagar vo nhi hai to ham text-[50px] de sakte hai aapne according,aur hame koe property lani hai css me to ham tailwind ke website pe ja ke search krr sakte hai vaha se hame uski value pata chaal jayegi
      <h1 className="bg-violet-900 text-white text-[50px] rounded-4xl">
        Tailwind Practice 1
        </h1>
        <br />
{/*  yaha pe p-1 jo hai vo padding hai padding me top,bottom , start and end: px and py */}
        {/* <button className="bg-green-700 text-white py-1 px-2.5 rounded-4xl">Submit</button> */} 

{/*  yaha par jo md:bg-yellow-300 liye hai e tab work krega jab 48rem se pada screen hoga ye media query hai ek tarah ki*/}
        <nav className="bg-violet-900 p-2 text-white font-semibold md:bg-yellow-300 md:text-3xl md:text-black lg:bg-pink-400 xl:bg-red-800 flex justify-between items-center">
            <div>Navbar</div>

            {/* <ul className="flex gap-10 hidden"> */} 
            <ul className=" gap-10 hidden md:flex">

                {/* yaha par sare li par hover effect lagana chah rhe hai */}
                <li className="hover:text-white cursor-pointer">Home</li>
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">Services</li>
                <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
        </nav>
    </div>
  );
};

export default TailwindPractice1;
