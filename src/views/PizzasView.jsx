import { PizzaCard } from "../components/PizzaCard/PizzaCard";
import { SearchBox } from "../components/SearchBox";
import { useMemo } from 'react';
import { usePizzas } from "../hooks/usePizzas";
import { useSearch } from "../hooks/useSearch";
import "./PizzasView.css";

export const PizzasView = () => {
    const { pizzas } = usePizzas();
    const { searchTerm } = useSearch();

    const listItems = useMemo(() => pizzas.filter(
        item => item.title.toLowerCase().includes(searchTerm.toLowerCase())
    ).map((item, index) => (
        <li key={index}>
            <PizzaCard pizza={item} />
        </li>
    )), [pizzas, searchTerm]);
    
    return (
        <div className="pizzas-view--container">
            <h1>Pizzas</h1>
            <SearchBox  defaultValue={searchTerm}/>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}