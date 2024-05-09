import { faCalendarCheck, faCartShopping, faRug } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import NavButton from '../navButton/NavButton';
import { useEffect, useState } from 'react';
import { useCartStore } from '../../store/cartStore';

const Navbar = () => {
    const cart = useCartStore((state) => state.cart);
    const [orderCounter, setOrderCounter] = useState(0);

    useEffect(() => {
        setOrderCounter(cart.reduce((acc, item) => acc + item.amount, 0) === 0 ? false : cart.reduce((acc, item) => acc + item.amount, 0));
    }, [cart]);

    return (
        <nav className='navbar'>
            <ul className='navbar__list'>
                <li className='navbar__item'>
                    <NavButton path='/events' icon={faCalendarCheck} text='Event' />
                </li>
                <li className='navbar__item navbar__item--ticket'>
                    <NavButton path='/tickets' icon={faRug} text='Biljetter' />
                </li>
                <li className='navbar__item'>
                    <NavButton path='/order' icon={faCartShopping} text='Order' orderCounter={orderCounter} />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;