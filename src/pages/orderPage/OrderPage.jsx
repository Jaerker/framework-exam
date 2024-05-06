import { useEffect, useState } from 'react';
import CounterContainer from '../../components/counterContainer/CounterContainer';
import { formatDay, formatLongMonth, formatTime } from '../../controller/dateController';
import { useCartStore } from '../../store/cartStore';
import './order-page.css'
import Button from '../../components/button/Button';

const OrderPage = () => {

    const cart = useCartStore((state) => state.cart);
    const clearCart = useCartStore((state) => state.clearCart);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let currentTotal = 0;
        cart.forEach(item => {
            currentTotal += ((item.eventObject.priceRanges[0].min + item.eventObject.priceRanges[0].max) / 2) * item.amount;
        });
        setTotal(currentTotal);


    }, [cart]);

    const handlePurchase = () => {
    }


    return (
        <>
            <h1 className='page-header'>Order</h1>
            {cart.length === 0 ?
                <>
                    <p className='empty-cart'>Kundkorgen är tom!</p>
                    <Button text='Gå till event' url='/events' />
                </> :
                <>

                    <ul className='order-list'>
                        <Button text='Töm kundkorg' color='warning' onClick={clearCart} />

                        {cart.map((item, index) => (<li className='order-list__item'>
                            <CounterContainer key={index} event={item.eventObject}>
                                <h3 className='list-item__header'>{item.eventObject.name}</h3>
                                <p className='list-item__sub-header'>{formatDay(item.eventObject.dates.start.localDate)} {formatLongMonth(item.eventObject.dates.start.localDate)}, kl {formatTime(item.eventObject.dates.start.localTime)} </p>
                                <p className='list-item__price'>{(item.eventObject.priceRanges[0].min + item.eventObject.priceRanges[0].max) / 2} SEK/st</p>
                            </CounterContainer>
                        </li>))}
                    </ul>
                    <h2 className='total-amount-announcer'>Totalt värde på order:</h2>
                    <p className='total-amount'>{total} SEK</p>
                    <Button text='Slutför köp' onClick={handlePurchase} />

                </>}

        </>



    );
};

export default OrderPage;