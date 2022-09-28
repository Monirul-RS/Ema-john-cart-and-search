import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
    const {handleAddToCart} = props;
    const {name, img, seller, price, ratings} = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
          <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <p>Manufacturer : {seller}</p>
            <p>Ratings : {ratings} stars</p>
          </div>
          <button  onClick={() =>handleAddToCart(props.product)} className='btn-cart'>
            <p className='btn-text'>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </button>

        </div>
    );
};

export default Product;<h2>This is product</h2>