import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCartShopping, faRug } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import NavButton from '../navButton/NavButton';

const Navbar = () => {
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
                    <NavButton path='/cart' icon={faCartShopping} text='Order' />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;