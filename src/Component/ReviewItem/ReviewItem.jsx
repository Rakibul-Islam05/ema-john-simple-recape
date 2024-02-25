import React from 'react';
import './reviewItem.css'
import { MdDelete } from "react-icons/md";


const ReviewItem = ({ product }) => {
    const { id, img, price, name, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="review-details">
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Order Quantity: <span className='orange-text'>${quantity}</span></p>
            </div>
            
            <button className='btn-style'>
                <MdDelete className='delete' />
            </button>
        </div>
    );
};

export default ReviewItem;