import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavButton = ({ path, icon, text }) => {

    const [isActive, setIsActive] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setIsActive(location.pathname === path ? true : false);
        console.log(location.pathname);
    }, [location]);


    return (
        <Link to={path} className='navbar__link'>
            <FontAwesomeIcon icon={icon} size='2xl' style={{ transition: 'all .2s', color: 'var(--c-pink)', opacity: isActive ? '1' : '.5' }} />
            <p>{text}</p>
        </Link>
    );
}

export default NavButton;