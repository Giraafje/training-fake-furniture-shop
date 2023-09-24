import React from 'react';
import './style.css'

const Product = ({id, onChange, name, image}) => {
    const handleClick = () => onChange(id)

    return (
        <div className="product">
            <img src={image} onClick={handleClick} style={{cursor: 'pointer'}}/>
            <p>{name}</p>
        </div>      
    )
};

export default Product;