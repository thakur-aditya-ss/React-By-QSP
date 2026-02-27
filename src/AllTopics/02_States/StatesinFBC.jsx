import { useState } from "react";


const StatesInFBC = () => {
    console.log("Component rendered");
    

    const [data, setData] = useState("Hello Everyone ❤️"); // [ud, f]
    const [cart, setCart] = useState("Add To Cart 🛒")


    const handleBtn = () => {
        setData("Bye Everyone 👋");
    };
    

    const handleCartBtn = () => {
        setCart("Go to Cart")
    }


    return (
        <>
            <h1>Learn States In Function Based</h1>
            <h2>{data}</h2>
            <button onClick={handleBtn}>update</button>

            <hr />
            <button onClick={handleCartBtn}> {cart} </button>
        </>
    );
};

export default StatesInFBC;