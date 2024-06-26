import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { formatDay, formatLongMonth, formatTime } from '../../controller/dateController';
import { usePathStore } from '../../store/pathStore.js';
import agent from '../../api/agent';
import CounterContainer from '../../components/counterContainer/CounterContainer';
import Button from '../../components/button/Button';
import './details-page.css';

const DetailsPage = () => {

	const { id } = useParams();
	const [event, setEvent] = useState(null);
	const [loading, setLoading] = useState(true);
	const [img, setImg] = useState(null);
	const { setPath } = usePathStore((state) => state);

	const fetchData = async () => {
		const eventDetails = await agent.details.byId(id);
		setEvent(eventDetails);
		console.log(eventDetails);
		try {
			let chosenImg = eventDetails.images[0];
			if (eventDetails.images) {
				const imgList = eventDetails.images.filter(img => img.ratio === '3_2');
				if (imgList) {
					imgList.forEach(image => {
						if (image.width > chosenImg.width) {
							chosenImg = image;
						}
					});
				}
				setImg(chosenImg.url);
			}
		}
		catch {
			setImg('https://via.placeholder.com/500')
		}
		setLoading(false);
	}

	useEffect(() => {
		setPath('/event/id');
		fetchData();
	}, []);

	return (
		<article className='details-wrapper'>
			<h1 className='page-header'>Event</h1>
			{loading ? <p className='page-sub-header'>Loading...</p> :
				<>
					{event === null ? <p className='page-sub-header'>Tyvärr så hittade vi inget om eventet!</p>
						:
						<>
							<p className='page-sub-header'>You are about to score some tickets to</p>
							<section className='event-information'>
								<img className='event-poster' src={img} alt='Bild för event' />
								<h2 className='event-information__name'>{event.name}</h2>
								<p className='event-information__date-and-time'>{formatDay(event.dates.start.localDate)} {formatLongMonth(event.dates.start.localDate)}, kl {formatTime(event.dates.start.localTime)} </p>
								<p className='event-information__location'> @ {event._embedded.venues[0].name}, {event._embedded.venues[0].city.name}  </p>
								<a href={`https://www.google.com/maps/search/?api=1&query=${event._embedded.venues[0].name}`} target='_blank' className='event-information__get-directions'> Hur tar jag mig dit?</a>
							</section>

							<CounterContainer event={event}>
								{event.priceRanges ? <h2>{(event.priceRanges[0].min + event.priceRanges[0].max) / 2} {event.priceRanges[0].currency || 'SEK'}/st</h2> : <h2> Ej tillgängligt</h2>}
							</CounterContainer>
							<Button url='/order' text='Gå till varukorgen' color='primary' />
						</>}
					<Button text='Gå tillbaka' url='/events' color='warning' />
				</>}
		</article>
	);
}

export default DetailsPage;