import { Link } from 'react-router-dom';
import './button.css';

const Button = ({ text, url = '', color = 'primary', onClick = null }) => {

    const Colors = {
        primary: 'var(--c-blue-green)',
        secondary: 'var(--c-pink)',
        warning: 'var(--c-red)'
    }

    if (url !== '') return (<Link to={url} className='button' style={{ backgroundColor: Colors[color] }} >{text}</Link>);

    return (
        <button onClick={() => onClick()} className='button' style={{ backgroundColor: Colors[color] }}>
            {text}
        </button>
    );
}

export default Button;