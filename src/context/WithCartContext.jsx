import { useCart } from "../hooks/useCart"
import { CartContext } from "./CartContext";

export const WithCartContext = ({ children }) => {
    const cart = useCart();
    return (
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    )
}