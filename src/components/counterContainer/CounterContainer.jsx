import './counter-container.css';
import Counter from '../counter/Counter';
const CounterContainer = ({ event, children, hasCounter = true }) => {
    return (
        <section className='counter-container-wrapper'>
            <section className='content'>{children}</section>
            {hasCounter && <Counter event={event} />}
        </section>
    );
}

export default CounterContainer;