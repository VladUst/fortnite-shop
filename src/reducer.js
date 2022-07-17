export function reducer(state, {type, payload}){
    switch(type){
        case 'SET_GOODS': return {
            ...state,
            goods: payload || [],
            loading: false,
        };
        case 'CLOSE_ALERT': return {
            ...state,
            alertName: ''
        }
        case 'REMOVE_FROM_BASKET': return {
            ...state,
            orders: state.orders.filter((el) => el.id !== payload.id)
        };
        case 'TOGGLE_BASKET': return {
            ...state,
            isBasketVisible: !state.isBasketVisible,
        };
        case 'INC_QUANTITY': return {
            ...state,
            orders: state.orders.map((el) => {
                if (el.id === payload.id) {
                    const newQuantity = el.quantity + 1;
                    return {
                        ...el,
                        quantity: newQuantity,
                    };
                } else {
                    return el;
                }
            })
        };
        case 'DEC_QUANTITY': return {
            ...state,
            orders: state.orders.map((el) => {
                if (el.id === payload.id) {
                    const newQuantity = el.quantity - 1;
                    return {
                        ...el,
                        quantity: newQuantity >= 0 ? newQuantity : 0,
                    };
                } else {
                    return el;
                }
            })
        };
        case 'ADD_TO_BASKET': {
            const itemIndex = state.orders.findIndex((el) => el.id === payload.id);
            let newOrders = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };
                newOrders = [...state.orders, newItem];
            } else {
                newOrders = state.orders.map((el, ind) => {
                    if (ind === itemIndex) {
                        return {
                            ...el,
                            quantity: el.quantity + 1,
                        };
                    } else {
                        return el;
                    }
                });
            }
            return {
                ...state,
                orders: newOrders,
                alertName: payload.name
            }
        }
        default: return state;
    }
}