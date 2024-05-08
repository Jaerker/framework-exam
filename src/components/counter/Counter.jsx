import { useCartStore } from '../../store/cartStore';
import './counter.css';
import Plus from '../../assets/img/plus.svg';
import Minus from '../../assets/img/minus.svg';

const Counter = ({ event }) => {
    const { cart, addToCart, removeFromCart } = useCartStore((state) => ({
        cart: state.cart,
        addToCart: state.addToCart,
        removeFromCart: state.removeFromCart
    }));

    return (
        <section className='counter-wrapper'>
            {event.priceRanges &&
                <>
                    <button className='counter-button' onClick={() => removeFromCart(event)}> <img src={Minus} className='counter-icon' alt='Minus tecken' /> </button>
                    <p className='counter-number'>{cart.find(item => item.id === event.id) ? cart.find(item => item.id === event.id).amount : 0}</p>
                    <button className='counter-button' onClick={() => addToCart(event)}> <img src={Plus} className='counter-icon' alt='Plus tecken' /> </button>

                </>}
        </section>
    );
}

export default Counter;
