import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav-button.css';

const NavButton = ({ path, icon, text, orderCounter = false }) => {

    const [isActive, setIsActive] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setIsActive(location.pathname === path ? true : false);
    }, [location]);




    return (

        <Link to={path} className='navbar__link'>
            <FontAwesomeIcon icon={icon} size='2xl' style={{ transition: 'all .2s', color: isActive ? 'var(--c-pink)' : 'var(--c-pink-t05)' }} />
            {orderCounter && <section className='order-counter' style={{ transition: 'all .2s', color: isActive ? 'var(--c-white)' : 'var(--c-white-t05)' }}><p style={{ transition: 'all .1s', borderColor: isActive ? 'var(--c-pink)' : 'var(--c-pink-t05)' }}>{orderCounter}</p></section>}

            <p>{text}</p>
        </Link>

    );
}

export default NavButton;