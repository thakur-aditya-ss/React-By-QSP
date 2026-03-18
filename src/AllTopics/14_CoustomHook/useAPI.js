import { useEffect, useState } from "react";

export const useAPI = (url) => {

    const [apiData, setAPIData] = useState(null);
    const [ loading, setLoading] = useState(false);

   async function getAPIData(){
    setLoading(true)
    try {
        let resp = await fetch(url)
        let data = await resp.json();
        // console.log(data);
        setAPIData(data);
         } catch (error) {
        console.log(error.response);
    } finally {
        setLoading(false);
    }
   };

   useEffect(() => {
    getAPIData()
   }, [url])

   return { apiData, loading};
   
};