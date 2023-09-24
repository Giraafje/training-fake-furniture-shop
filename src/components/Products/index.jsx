import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import Product from '../Product'
import './style.css'

const Products = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
   
    const handleChange = (id) => navigate(`product/${id}`)

    useEffect(() => {
        fetch("https://apps.kodim.cz/react-2/xxxmuck/products")
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className="products">
            {products.map((product) => <Product key={product.id} id={product.id} name={product.name} image={product.image} onChange={handleChange}/>)}
        </div>        
    )
};

export default Products;