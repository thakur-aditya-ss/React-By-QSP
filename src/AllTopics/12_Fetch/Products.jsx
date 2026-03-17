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
        <h1>Products</h1>

        {allProducts.length === 0 ?
        (<>
        <p>No Products Are Available</p></>):
        (<>
        <section>
            {allProducts.map((ele)=>{
                return (<div>
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