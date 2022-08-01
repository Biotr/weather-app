import { useState, useEffect } from 'react';
import axios from 'axios'

export const useFetchApi = (url) => {
    const [status, setStatus] = useState('fetching');
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url)
                setData(response);
                setStatus('fetched')
            } catch (err) {
                setStatus('error')
            }
        }
        fetchData()


    }, [url])

    return { data, status }
}

