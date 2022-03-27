import React, { useState, useEffect } from 'react';
import axios from 'axios'
const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setError] = useState(false);

    useEffect(() => {
        const fetchData = async (e) => {
            try {
                const res = await axios.get(url)
                let dataRes = res && res.data && res.data ? res.data : [];
                // console.log('data', data)
                if (dataRes) {
                    setData(dataRes)
                    setIsLoading(false);
                    setError(true);
                }
            } catch (e) {
                console.log(e)
            }
        };
        fetchData()
    }, [url]);

    return {
        data,
        isLoading,
        isError
    }
}

export default useFetch