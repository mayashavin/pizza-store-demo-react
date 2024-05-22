/* eslint-disable react/prop-types */
import "./PizzaCard.css";
import { useCart } from "../../hooks/useCart";

export const PizzaCard = ({ pizza }) => {
    const { add } = useCart();
    const addCart = () => add(pizza)
    
    return (
        <article className="pizza--details-wrapper">
            <img src={pizza.image} alt={pizza.title} height="200" width="300" />
            <div className="pizza--details">
                <p>{pizza.description }</p>
                <div className="pizza--inventory">
                    <div className="pizza--inventory-price">$ { pizza.price }</div>
                </div>
            </div>
            <button onClick={addCart} className="pizza--details-btn">Add to cart</button>
        </article>
    )
}