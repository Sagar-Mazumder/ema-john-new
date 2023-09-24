import React, { useEffect, useState } from 'react';
import './Placeorder.css'
import Item from '../Item/Item';
const Placeorder = () => {

    const [items, setItems] = useState([]);
    const [count, setCount] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const showItem = (product) => {
        const newCount = [...count, product];
        setCount(newCount);
        console.log(product);
    }
    return (
        <div className='placeorder'>
            <div className="items">
                {
                    items.map(item => <Item
                        key={item.id}
                        item={item}
                        productHandle={showItem}
                    ></Item>)
                }
            </div>
            <div className="ordersummery">
                <h4>Order Summary</h4>
                <h4>Total Order:{count.length}</h4>
            </div>
        </div>
    );
};

export default Placeorder;
