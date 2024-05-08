import { useEffect, useState } from 'react';
import { usePathStore } from '../../store/pathStore.js';
import CounterContainer from '../../components/counterContainer/CounterContainer';
import { formatDay, formatLongMonth, formatTime } from '../../controller/dateController';
import { useCartStore } from '../../store/cartStore';
import { useTicketStore } from '../../store/ticketStore';
import './order-page.css'
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {

    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();
    const { setPath } = usePathStore((state) => state);

    const { cart, clearCart } = useCartStore((state) => state);
    const { events, createPurchase } = useTicketStore((state) => state);
    useEffect(() => {
        setPath('/order');
    }, []);
    useEffect(() => {
        let currentTotal = 0;
        cart.forEach(item => {
            currentTotal += ((item.eventObject.priceRanges[0].min + item.eventObject.priceRanges[0].max) / 2) * item.amount;
        });
        setTotal(currentTotal);


    }, [cart]);

    const handlePurchase = async () => {
        setLoading(true);
        try {
            let ticketListId = crypto.randomUUID();
            while (events.some(event => event.id === ticketListId)) {
                ticketListId = crypto.randomUUID();
            }

            createPurchase(cart, ticketListId);

            clearCart();
            await new Promise(resolve => setTimeout(resolve, 500)); //Låtsas att man väntar på koppling till databas
            navigate(`/order/complete`, { state: { ticketListId } });

        }
        catch (e) {
            console.log(e)
            setLoading(false);
        }

    }


    return (
        <>
            <h1 className='page-header'>Order</h1>
            {loading ? <p className='page-loading'>Vänta...</p> :
                <>
                    {cart.length === 0 ?
                        <>
                            <p className='empty-cart'>Kundkorgen är tom!</p>
                            <Button text='Sök efter events' url='/events' />
                        </> :
                        <>

                            <ul className='order-list'>
                                <Button text='Töm kundkorg' color='warning' onClick={clearCart} />

                                {cart.map((item, index) => (<li key={index} className='order-list__item'>
                                    <CounterContainer event={item.eventObject} onClick={() => navigate(`/event/${item.eventObject.id}`)}>
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

                </>}


        </>



    );
};

export default OrderPage;