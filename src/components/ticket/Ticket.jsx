import { formatDayAndShortMonth } from '../../controller/dateController';
import './ticket.css';

const Ticket = ({ ticket, event }) => {
    const { name, dates } = event;
    const { start } = dates;
    const venue = event._embedded.venues[0];


    return (
        <article className='ticket-wrapper'>
            <section className='ticket__grid-section'>
                <p className='ticket__small-header'>WHAT</p>
                <h1 className='ticket__event-name'>{name}</h1>
            </section>
            <section className='ticket__grid-section'>
                <p className='ticket__small-header'>WHERE</p>
                <h2 className='ticket__event-address'>{venue.name}</h2>
                <p className='ticket__event-location'>{venue.address.line1}, {venue.postalCode} </p>
                <p className='ticket__event-city'>{venue.city.name}</p>
            </section>
            <section className='ticket__grid-section ticket__grid-section--with-child-sections'>
                <section className='ticket__sub-section'>
                    <p className='ticket__small-header'>WHEN</p>
                    <h3 className='ticket__sub-section-info'>{formatDayAndShortMonth(start.localDate)}</h3>
                </section>
                <section className='ticket__sub-section'>
                    <p className='ticket__small-header'>FROM</p>
                    <h3 className='ticket__sub-section-info'>19.00</h3>
                </section>

            </section>
            <section className='ticket__grid-section'>
                <p className='ticket__small-header'>INFO</p>
                <table className='ticket__info-list'>
                    <tbody>
                        <tr className='ticket__info-item'>
                            <td>Section</td>
                            <td>Seat</td>
                        </tr>
                        <tr className='ticket__info-item'>
                            <td>{ticket.section}</td>
                            <td>{ticket.seat}</td>
                        </tr>
                    </tbody>
                </table>


            </section>
            <section className='ticket__barcode-section'>
                <h1 className='ticket__barcode'>{ticket.id}</h1>
                <h2 className='ticket__readable-barcode'>#{ticket.id}</h2>
            </section>
        </article>
    );
}

export default Ticket;