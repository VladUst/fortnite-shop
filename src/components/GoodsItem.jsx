import { useContext } from 'react';
import { ShopContext } from '../context';

function GoodsItem(props) {
    const {
        mainId: id,
        displayName: name,
        displayDescription: description,
        price: { regularPrice: price },
        granted,
    } = props;
    const { addToBasket } = useContext(ShopContext);
    return (
        <div className="card">
            <div className="card-image">
                <img src={granted[0].images.full_background} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn deep-orange darken-4"
                    onClick={() => addToBasket({ id, name, price })}
                >
                    Купить
                </button>
                <span className="right" style={{ fontSize: '1.8rem' }}>
                    {price} мон.
                </span>
            </div>
        </div>
    );
}

export { GoodsItem };
