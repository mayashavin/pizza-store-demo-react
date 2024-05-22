/* eslint-disable react/prop-types */
import "./PizzaCard.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const PizzaCard = ({ pizza }) => {
    const { add } = useContext(CartContext);
    const addCart = () => add({ ...pizza, quantity: 1 })

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