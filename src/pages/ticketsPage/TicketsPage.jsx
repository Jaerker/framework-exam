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

            {!events ? <p className='page-loading'>Det verkar inte finnas några biljetter beställda av dig än, skynda dig innan biljetterna tar slut!!</p> :
                <>
                    {events.map((event, index) =>
                        <TicketContainer key={index} event={event} />)}
                </>
            }
        </>);
};

export default TicketsPage;