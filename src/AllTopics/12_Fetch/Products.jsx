import React, { useEffect, useState } from 'react'

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);

    async function getProducts() {
        try{
            let resp = await fetch("https://dummyjson.com/products");
            let data = await resp.json();
            console.log(data.products);
            setAllProducts(data.products);
            
        } catch (err){
            console.log(err.response);
        }  
    }

    useEffect(() => {
        getProducts();
    },[]);

  return (
    <div>
        <h1 className='m-2.5 p-2.5 bg-black text-white text-6xl'>Products</h1>

        {allProducts.length === 0 ?
        (<>
        <p>No Products Are Available</p></>):
        (<>
        <section>
            {allProducts.map((ele)=>{
                return (<div className='m-2.5 p-2.5 bg-gray-700 text-3xl text-white'>
                    <h2>{ele.title}</h2>
                </div>


                )

            })}
            </section></>)
        }

    </div>
  );
};

export default Products;