import './ticket.css';

const Ticket = () => {
    return (
        <article className='ticket-wrapper'>
            <section className='ticket__grid-section'>
                <p className='ticket__small-header'>WHAT</p>
                <h1 className='ticket__event-name'>Lasse-Stefanz</h1>
            </section>
            <section className='ticket__grid-section'>
                <p className='ticket__small-header'>WHERE</p>
                <h2 className='ticket__event-address'>Kjell Härnqvistsalen</h2>
                <p className='ticket__event-location'>Göteborgs universitet. Pedagogen, hus A</p>
            </section>
            <section className='ticket__grid-section ticket__grid-section--with-child-sections'>
                <section className='ticket__sub-section'>
                    <p className='ticket__small-header'>WHEN</p>
                    <h3 className='ticket__sub-section-info'>21 Mar</h3>
                </section>
                <section className='ticket__sub-section'>
                    <p className='ticket__small-header'>FROM</p>
                    <h3 className='ticket__sub-section-info'>19.00</h3>
                </section>
                <section className='ticket__sub-section'>
                    <p className='ticket__small-header'>TO</p>
                    <h3 className='ticket__sub-section-info'>21.00</h3>
                </section>
            </section>
            <section className='ticket__grid-section'>
                <p className='ticket__small-header'>INFO</p>
                <ul className='ticket__info-list'>
                    <li className='ticket__info-item'>Section C</li>
                    <li className='ticket__info-item'>Seat 233</li>
                </ul>

            </section>
            <section className='ticket__barcode-section'>
                <h1 className='ticket__barcode'>HA6TD</h1>
                <h2 className='ticket__readable-barcode'>#HA6TD</h2>
            </section>
        </article>
    );
}

export default Ticket;