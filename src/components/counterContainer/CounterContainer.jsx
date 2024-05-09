import Counter from '../counter/Counter';
import './counter-container.css';

const CounterContainer = ({ event, children, hasCounter = true, onClick = (() => { }) }) => {
    return (
        <section className='counter-container-wrapper'>
            <section className='content' onClick={onClick}>{children}</section>
            {hasCounter && <Counter event={event} />}
        </section>
    );
}

export default CounterContainer;