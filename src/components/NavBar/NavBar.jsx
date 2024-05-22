import { Link } from 'react-router-dom';
import { Cart } from '../Cart/Cart';
import './NavBar.css';

export const NavBar = () => {
    return (
        <header>
            <nav>
                <Link to={'/'}>Home</Link>
            </nav>
            <Cart />
        </header>
    )
};