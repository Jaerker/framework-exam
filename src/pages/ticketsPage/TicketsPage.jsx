import { useEffect } from 'react';
import TicketContainer from '../../components/ticketContainer/TicketContainer';
import { usePathStore } from '../../store/pathStore';
import { useTicketStore } from '../../store/ticketStore';
import './tickets-page.css';
const TicketsPage = () => {
    const events = useTicketStore((state) => state.events);
    const { setPath } = usePathStore((state) => state);
    useEffect(() => {
        setPath('/tickets');
    }, []);

    return (
        <>
            {events.length === 0 ?
                <>
                    <section className='no-tickets'>
                        <p>Det verkar inte finnas några biljetter beställda av dig än.</p>
                        <p>Skynda dig innan det är för sent!</p>
                    </section>
                </>
                :
                <>
                    {events.map((event, index) =>
                        <TicketContainer key={index} event={event} />)}
                </>
            }
        </>);
}

export default TicketsPage;