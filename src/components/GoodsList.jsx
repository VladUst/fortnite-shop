import { GoodsItem } from './GoodsItem';

function GoodsList({ goods = [], addToBasket = Function.Prototype }) {
    if (!goods.length) {
        return <h3>Nothing not found</h3>;
    }
    return (
        <div className="goods">
            {goods.map((item) => (
                <GoodsItem
                    key={item.mainId}
                    addToBasket={addToBasket}
                    {...item}
                />
            ))}
        </div>
    );
}

export { GoodsList };
