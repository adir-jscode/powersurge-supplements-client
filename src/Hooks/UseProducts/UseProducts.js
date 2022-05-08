import React, { useEffect, useState } from 'react';

const UseProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    console.log(isLoading);
    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data.slice(0, 6),
                setIsLoading(false)
                )
                
            });
    }, [])
    
    return [products, setProducts,isLoading,setIsLoading];
};

export default UseProducts;