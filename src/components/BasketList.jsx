import { useContext } from 'react';
import { ShopContext } from '../context';
import { BasketItem } from './BasketItem';

function BasketList(props) {
    const { orders = [], handleBasketShow = Function.Prototype } =
        useContext(ShopContext);
    const totalPrice = orders.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);
    return (
        <ul className="collection basket-list">
            <li
                href="#!"
                className="collection-item active deep-orange darken-1"
            >
                Корзина
            </li>
            {orders.length ? (
                orders.map((item) => <BasketItem key={item.id} {...item} />)
            ) : (
                <li className="collection-item">Корзина пуста</li>
            )}
            <li
                href="#!"
                className="collection-item active deep-orange darken-4"
            >
                Итого: {totalPrice} мон.
            </li>
            <li href="#!">
                <button className="btn btn-small deep-orange darken-1 confirm-btn right">
                    Оформить
                </button>
            </li>
            <i
                className="material-icons basket-close"
                onClick={handleBasketShow}
            >
                close
            </i>
        </ul>
    );
}

export { BasketList };
