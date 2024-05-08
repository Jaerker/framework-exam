import { useEffect, useState } from 'react';
import './card.css';
import { Link } from 'react-router-dom';
import { formatDay, formatShortMonth, formatTime } from '../../controller/dateController';

const Card = ({ data }) => {

    const [startDate, setStartDate] = useState('');
    const [bgImage, setBgImage] = useState('');

    useEffect(() => {
        setStartDate(new Date(data.dates.start.localDate))
        const imgData = data.images.find(img => img.ratio === '3_2');
        if (imgData) setBgImage(imgData.url);
        else setBgImage(data.images[0].url);
    }, []);

    if (startDate === '') return (<></>);

    else {
        return (
            <Link to={`/event/${data.id}`}>
                <section className='event-card'>
                    <section className='event-card__date' style={{ background: `linear-gradient(rgb(0, 0, 0, .7), rgb(0, 0, 0, .7)), url(${bgImage})`, backgroundPosition: 'center center', backgroundSize: 'cover' }}>
                        <h2>{formatDay(startDate)}</h2>
                        <p>{formatShortMonth(startDate)}</p>
                    </section>
                    <section className='event-card__information'>
                        <h2 className='event-card__name'>{data.name}</h2>
                        <p className='event-card__city'>{data._embedded.venues[0].city.name}</p>
                        <p className='event-card__location'>{data._embedded.venues[0].name || data._embedded.venues[0].address.line1}</p>
                        <section className='event-card__bottom-section'>
                            {data.dates.start.localTime ? <p className='event-card__time'>{formatTime(data.dates.start.localTime)}</p> : <p className='event-card__time'>Tid ej satt</p>}
                            {data.priceRanges ? <p className='event-card__price'>Från {data.priceRanges[0].min} {data.priceRanges[0].currency || 'SEK'}</p> : <p className='event-card__price'> Ej tillgängligt</p>}
                        </section>
                    </section>
                </section>
            </Link>
        );
    }
}

export default Card;