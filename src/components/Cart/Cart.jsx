import { useContext, useState } from 'react';
import "./Cart.css";
import { CartContext } from '../../context/CartContext';

export const Cart = () => {
    const [showCartDetails, setShowCartDetails] = useState(false);
    const { items, total, remove, clear } = useContext(CartContext);
    const toggleCartDetails = () => {
        setShowCartDetails(showCartDetails => !showCartDetails)
    }
    
    return (
        <div className="cart">
            <span className="cart__total" onClick={toggleCartDetails} role="button">
                Cart: {total}
            </span>
            {showCartDetails && (
                <div className="cart__list">
                    {total === 0 
                    ? <p>No item in cart</p>
                    : (
                        <div>
                            <p>In your cart:</p>
                            <ul>
                                {items.map((item, index) => (
                                    <li key={item.id} className="cart__list-item">
                                        <span data-testid="title">{index + 1}. { item.title }</span>
                                        <span data-testid="price">${ item.price }</span> x
                                        <span data-testid="quantity">{ item.quantity }</span>
                                        <span data-testid="total">= ${ (+item.price * item.quantity).toFixed(2) }</span>
                                        <button onClick={() => remove(item.id)}>Remove</button>
                                    </li>
                                ))}
                            </ul>                
                            <div className="separator"></div>
                                <button onClick={clear} data-testid="remove-all">Remove all</button>
                        </div>    
                    )}
                        
                    </div >
                )}
                </div >
    );
}