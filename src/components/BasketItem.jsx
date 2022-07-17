import { useContext } from 'react';
import { ShopContext } from '../context';

function BasketItem({ id, name, price, quantity }) {
    const { removeFromBasket, incQuantity, decQuantity } =
        useContext(ShopContext);
    return (
        <li href="#!" className="collection-item">
            {name} x {quantity} = {price * quantity} мон.
            <span
                href="#!"
                className="secondary-content"
                onClick={() => removeFromBasket(id)}
            >
                <i className="material-icons basket-delete">close</i>
            </span>
            <span
                href="#!"
                className="secondary-content"
                onClick={() => decQuantity(id)}
            >
                <i className="material-icons basket-delete">expand_more</i>
            </span>
            <span
                href="#!"
                className="secondary-content"
                onClick={() => incQuantity(id)}
            >
                <i className="material-icons basket-delete">expand_less</i>
            </span>
        </li>
    );
}

export { BasketItem };
