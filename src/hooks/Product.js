import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../context/Context';
import { apidata } from '../service/api';

const useProduct = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const proItems = await apidata('products');
                setData(proItems);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };
        fetchData();
    }, []);

    // Log current state for debugging
    console.log("Current product data:", data);

    return data;
}

export default useProduct