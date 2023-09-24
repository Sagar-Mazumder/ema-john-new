import React from 'react';
import './Item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Item = (props) => {
    const { name, img, price, seller, ratings, id } = props.item;
    const showItem = props.productHandle;
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <div className='text-item'>
                <h6>{name}</h6>
                <p>Price:${price}</p>
                <p>Manufacture:{seller}</p>
                <p>Ratings:{ratings}star</p>
            </div>
            <button onClick={() => showItem(props.item)} className='btn-cart'>Add to Cart<FontAwesomeIcon icon={faCoffee} />
            </button>
        </div>
    );
};

export default Item;