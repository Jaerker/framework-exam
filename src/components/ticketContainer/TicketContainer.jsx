import Ticket from '../ticket/Ticket';
import './ticket-container.css';
const TicketContainer = ({ event }) => {
    return (
        <section className='ticket-container'>
            {event.tickets &&
                <>
                    {event.tickets.map((ticket, index) => <Ticket key={index} ticket={ticket} event={event.eventObject} />)}
                </>}
        </section>
    );
}

export default TicketContainer;