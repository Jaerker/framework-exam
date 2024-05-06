import './counter-container.css';
import Counter from '../counter/Counter';
const CounterContainer = ({ event, children }) => {
    return (
        <section className='counter-container-wrapper'>
            <section className='content'>{children}</section>
            <Counter event={event} />
        </section>
    );
}

export default CounterContainer;