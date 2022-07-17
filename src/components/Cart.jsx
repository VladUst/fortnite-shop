import { useContext } from 'react';
import { ShopContext } from '../context';

function Cart(props) {
    const { orders, handleBasketShow = Function.prototype } =
        useContext(ShopContext);
    const quantity = orders.length;
    return (
        <div
            className="cart amber darken-3 white-text"
            onClick={handleBasketShow}
        >
            <i className="material-icons">shopping_cart</i>
            {quantity ? (
                <span className="cart-quantity">{quantity}</span>
            ) : null}
        </div>
    );
}

export { Cart };
