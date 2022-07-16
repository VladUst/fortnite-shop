import { useEffect } from 'react';

function Alert({ name = '', closeAlert = Function.prototype }) {
    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);
        return () => {
            clearTimeout(timerId);
        };
        //eslint-disable-next-line
    }, [name]);
    return (
        <div id="toast-container">
            <div className="toast deep-orange lighten-3 black-text">
                {name} добавлен в корзину
            </div>
        </div>
    );
}

export { Alert };
