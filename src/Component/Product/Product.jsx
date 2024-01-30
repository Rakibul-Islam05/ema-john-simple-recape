import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const { img, name, seller, quantity, price, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h4 className='product-name'>{name}</h4>
                <p>Price: ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating: {ratings} start</p>
            </div> 
            <button className='btn-card'>Add to Card</button>
        </div>
    );
};

export default Product; 