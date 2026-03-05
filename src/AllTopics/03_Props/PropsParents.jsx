import { useState } from "react";
import PropsChild from "./PropsChild";
import PropsChild2 from "./PropsChild2";
import PropsChild3 from "./PropsChild3";

const PropsParent = () => {
    const [value, setValue] = useState("");


    let data1 = "Hello World";
    let data2 = [10,20,30,40];
    let data3 = {firstname : "John"};

    function greet(val) {
        console.log("Welcome", val);
        setValue(`Welcome ${val}`)
    };

    return (
        <div>
            <h1>PropsParent : {value} </h1>

            <hr />

            {/* Sending Multiple Props */}

            <PropsChild
            value1={data1} 
            value2={data2}
            value3={data3}/>

            <hr />

            {/* Select Multiple Data in single props */}
            <PropsChild2 value = {{ data1,data2,data3}}/>
            
            <hr />

             {/* Recieve Data from child to parents  */}
             <PropsChild3 greet={greet}/>



        </div>
    );
};
export default PropsParent;