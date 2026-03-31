import { useEffect, useState } from "react";

export const useDebounce = (query, delay = 1000) => {
    const [debounceQuery, setDebouncedQuery] = useState("");

        useEffect(() => {
            let timer = setTimeout (() => {
                setDebouncedQuery(query);
            },delay);

            return () => clearTimeout(timer)
        },[query]);


        return debounceQuery;


};