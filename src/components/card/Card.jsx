import { useEffect, useState } from 'react';
import './card.css';
/*data:{
    name, -> name
    date, -> dates.start.localDate
    time, -> dates.start.localTime
    price,
    venueLocation, -> _embedded.venues[0].name
    venueAddress, -> _embedded.venues[0].address.line1
    venuePostalCode, -> _embedded.venues[0].postalCode
    venueCity, -> _embedded.venues[0].city.name
    venueCountry, -> _embedded.venues[0].country.name
    venueUrl, -> _embedded.venues[0].url
    images, -> images
    salesStart, -> sales.public.startDateTime
    salesEnd, -> sales.public.endDateTime
    dateTBD, -> dates.start.dateTBD
    dateBTA, -> dates.start.dateBTA
    timeTBD, -> dates.start.timeTBD
    noSpecificTime, -> dates.start.noSpecificTime
    status, -> dates.status.code
    spanMultipleDays, -> dates.start.spanMultipleDays
    priceRanges, -> priceRanges


} */
const Card = ({ data }) => {
    const Month = {
        0: 'JAN',
        1: 'FEB',
        2: 'MAR',
        3: 'APR',
        4: 'MAJ',
        5: 'JUN',
        6: 'JUL',
        7: 'AUG',
        8: 'SEP',
        9: 'OKT',
        10: 'NOV',
        11: 'DEC'
    }

    const [startDate, setStartDate] = useState("");

    useEffect(() => {
        setStartDate(new Date(data.dates.start.localDate))
    }, []);

    if (startDate === "") return (<></>);
    else {

        return (
            <section className='event-card'>
                <section className="event-card__date">
                    <h2>{startDate.getDate()}</h2>
                    <p>{Month[startDate.getMonth()]}</p>
                </section>
                <section className="event-card__information">

                </section>
            </section>
        );
    }

}

export default Card;