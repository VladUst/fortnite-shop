import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';

import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const [isBasketVisible, setBasketVisible] = useState(false);
    const [alertName, setAlertName] = useState('');
    useEffect(function getGoods() {
        fetch(API_URL, { headers: { Authorization: API_KEY } })
            .then((response) => response.json())
            .then((data) => {
                data.shop && setGoods(data.shop.slice(0, 12));
                setLoading(false);
            });
    }, []);
    const addToBasket = (item) => {
        const itemIndex = orders.findIndex((el) => el.id === item.id);
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrders([...orders, newItem]);
        } else {
            const newOrder = orders.map((el, ind) => {
                if (ind === itemIndex) {
                    return {
                        ...el,
                        quantity: el.quantity + 1,
                    };
                } else {
                    return el;
                }
            });
            setOrders(newOrder);
        }
        setAlertName(item.name);
    };
    const removeFromBasket = (id) => {
        const newOrders = orders.filter((el) => el.id !== id);
        setOrders(newOrders);
    };
    const incQuantity = (itemId) => {
        const newOrder = orders.map((el) => {
            if (el.id === itemId) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity,
                };
            } else {
                return el;
            }
        });
        setOrders(newOrder);
    };
    const decQuantity = (itemId) => {
        const newOrder = orders.map((el) => {
            if (el.id === itemId) {
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                };
            } else {
                return el;
            }
        });
        setOrders(newOrder);
    };
    const handleBasketShow = () => {
        setBasketVisible(!isBasketVisible);
    };
    const closeAlert = () => {
        setAlertName('');
    };
    return (
        <main className="container content">
            <Cart
                quantity={orders.length}
                handleBasketShow={handleBasketShow}
            />
            {loading ? (
                <Preloader />
            ) : (
                <GoodsList addToBasket={addToBasket} goods={goods} />
            )}
            {isBasketVisible && (
                <BasketList
                    orders={orders}
                    handleBasketShow={handleBasketShow}
                    removeFromBasket={removeFromBasket}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}
                />
            )}
            {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
        </main>
    );
}

export { Shop };
