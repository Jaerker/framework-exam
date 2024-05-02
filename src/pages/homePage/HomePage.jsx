import './home-page.css';
import Logo from '../../assets/img/logo.svg';
const HomePage = () => {

	//Spara för tillfället för att se hur datan ska se ut i framtiden
	const dummyData = [
		{
			id: 'Z698xZq2Z17_3PN',
			eventObject: {
				"name": "Jazz i Halmstad - Music, Music, Music",
				"type": "event",
				"id": "Z698xZq2Z17_3PN",
				"test": false,
				"url": "https://www.ticketmaster.se/event/jazz-i-halmstad-music-music-music-biljetter/652963",
				"locale": "sv-se",
				"images": [
					{
						"ratio": "16_9",
						"url": "https://s1.ticketm.net/dam/c/7be/4e1e9428-29ec-401f-aa45-f1577614b7be_105421_TABLET_LANDSCAPE_16_9.jpg",
						"width": 1024,
						"height": 576,
						"fallback": true
					},
					{
						"ratio": "16_9",
						"url": "https://s1.ticketm.net/dam/c/7be/4e1e9428-29ec-401f-aa45-f1577614b7be_105421_RECOMENDATION_16_9.jpg",
						"width": 100,
						"height": 56,
						"fallback": true
					},
					{
						"ratio": "16_9",
						"url": "https://s1.ticketm.net/dam/c/7be/4e1e9428-29ec-401f-aa45-f1577614b7be_105421_RETINA_LANDSCAPE_16_9.jpg",
						"width": 1136,
						"height": 639,
						"fallback": true
					},
					{
						"ratio": "16_9",
						"url": "https://s1.ticketm.net/dam/c/7be/4e1e9428-29ec-401f-aa45-f1577614b7be_105421_TABLET_LANDSCAPE_LARGE_16_9.jpg",
						"width": 2048,
						"height": 1152,
						"fallback": true
					},
					{
						"ratio": "16_9",
						"url": "https://s1.ticketm.net/dam/c/7be/4e1e9428-29ec-401f-aa45-f1577614b7be_105421_RETINA_PORTRAIT_16_9.jpg",
						"width": 640,
						"height": 360,
						"fallback": true
					},
					{
						"ratio": "3_2",
						"url": "https://s1.ticketm.net/dam/c/7be/4e1e9428-29ec-401f-aa45-f1577614b7be_105421_ARTIST_PAGE_3_2.jpg",
						"width": 305,
						"height": 203,
						"fallback": true
					},
					{
						"ratio": "3_2",
						"url": "https://s1.ticketm.net/dam/c/7be/4e1e9428-29ec-401f-aa45-f1577614b7be_105421_TABLET_LANDSCAPE_3_2.jpg",
						"width": 1024,
						"height": 683,
						"fallback": true
					},
					{
						"ratio": "16_9",
						"url": "https://s1.ticketm.net/dam/c/7be/4e1e9428-29ec-401f-aa45-f1577614b7be_105421_EVENT_DETAIL_PAGE_16_9.jpg",
						"width": 205,
						"height": 115,
						"fallback": true
					},
					{
						"ratio": "3_2",
						"url": "https://s1.ticketm.net/dam/c/7be/4e1e9428-29ec-401f-aa45-f1577614b7be_105421_RETINA_PORTRAIT_3_2.jpg",
						"width": 640,
						"height": 427,
						"fallback": true
					},
					{
						"ratio": "4_3",
						"url": "https://s1.ticketm.net/dam/c/7be/4e1e9428-29ec-401f-aa45-f1577614b7be_105421_CUSTOM.jpg",
						"width": 305,
						"height": 225,
						"fallback": true
					}
				],
				"sales": {
					"public": {
						"startDateTime": "2024-01-17T13:53:00Z",
						"startTBD": false,
						"startTBA": false,
						"endDateTime": "2024-05-07T15:00:00Z"
					}
				},
				"dates": {
					"start": {
						"localDate": "2024-05-07",
						"localTime": "20:00:00",
						"dateTime": "2024-05-07T18:00:00Z",
						"dateTBD": false,
						"dateTBA": false,
						"timeTBA": false,
						"noSpecificTime": false
					},
					"timezone": "Europe/Stockholm",
					"status": {
						"code": "onsale"
					},
					"spanMultipleDays": false
				},
				"classifications": [
					{
						"primary": true,
						"segment": {
							"id": "KZFzniwnSyZfZ7v7nJ"
						},
						"genre": {
							"id": "KnvZfZ7vAvd"
						},
						"subGenre": {
							"id": "KZazBEonSMnZfZ7vAk6"
						},
						"family": false
					}
				],
				"promoter": {
					"id": "585",
					"name": "Destination Halmstad"
				},
				"promoters": [
					{
						"id": "585",
						"name": "Destination Halmstad"
					}
				],
				"priceRanges": [
					{
						"type": "standard including fees",
						"currency": "SEK",
						"min": 20.0,
						"max": 250.0
					},
					{
						"type": "standard",
						"currency": "SEK",
						"min": 10.0,
						"max": 220.0
					}
				],
				"_links": {
					"self": {
						"href": "/discovery/v2/events/Z698xZq2Z17_3PN?locale=sv-se"
					},
					"venues": [
						{
							"href": "/discovery/v2/venues/Z598xZq2ZeFa1?locale=sv-se"
						}
					]
				},
				"_embedded": {
					"venues": [
						{
							"name": "Nissanscenen, Stadsbibl. Hstad",
							"type": "venue",
							"id": "Z598xZq2ZeFa1",
							"test": false,
							"url": "https://www.ticketmaster.se/venue/nissanscenen-stadsbibl-hstad-halmstad-biljetter/nis/420",
							"locale": "sv-se",
							"postalCode": "302 27",
							"timezone": "Europe/Stockholm",
							"city": {
								"name": "Halmstad"
							},
							"country": {
								"name": "Sverige",
								"countryCode": "SE"
							},
							"address": {
								"line1": "Axel Olsons gata 1"
							},
							"location": {
								"longitude": "12.8575",
								"latitude": "56.67226"
							},
							"upcomingEvents": {
								"mfx-se": 1,
								"_total": 1,
								"_filtered": 0
							},
							"_links": {
								"self": {
									"href": "/discovery/v2/venues/Z598xZq2ZeFa1?locale=sv-se"
								}
							}
						}
					]
				}
			},
			amount: 2
		},
		{
			id: 'Z698xZq2Z17_bFo',
			eventObject: {
				"name": "Music is coming",
				"type": "event",
				"id": "Z698xZq2Z17_bFo",
				"test": false,
				"url": "https://www.ticketmaster.se/event/music-is-coming-biljetter/658211",
				"locale": "sv-se",
				"images": [
					{
						"ratio": "3_2",
						"url": "https://s1.ticketm.net/dam/a/7fb/e12424c8-2b84-4375-87f0-bc81949e17fb_RETINA_PORTRAIT_3_2.jpg",
						"width": 640,
						"height": 427,
						"fallback": false
					},
					{
						"ratio": "16_9",
						"url": "https://s1.ticketm.net/dam/a/7fb/e12424c8-2b84-4375-87f0-bc81949e17fb_TABLET_LANDSCAPE_16_9.jpg",
						"width": 1024,
						"height": 576,
						"fallback": false
					},
					{
						"ratio": "16_9",
						"url": "https://s1.ticketm.net/dam/a/7fb/e12424c8-2b84-4375-87f0-bc81949e17fb_TABLET_LANDSCAPE_LARGE_16_9.jpg",
						"width": 2048,
						"height": 1152,
						"fallback": false
					},
					{
						"ratio": "16_9",
						"url": "https://s1.ticketm.net/dam/a/7fb/e12424c8-2b84-4375-87f0-bc81949e17fb_RETINA_LANDSCAPE_16_9.jpg",
						"width": 1136,
						"height": 639,
						"fallback": false
					},
					{
						"ratio": "4_3",
						"url": "https://s1.ticketm.net/dam/a/7fb/e12424c8-2b84-4375-87f0-bc81949e17fb_CUSTOM.jpg",
						"width": 305,
						"height": 225,
						"fallback": false
					},
					{
						"ratio": "16_9",
						"url": "https://s1.ticketm.net/dam/a/7fb/e12424c8-2b84-4375-87f0-bc81949e17fb_RETINA_PORTRAIT_16_9.jpg",
						"width": 640,
						"height": 360,
						"fallback": false
					},
					{
						"ratio": "3_2",
						"url": "https://s1.ticketm.net/dam/a/7fb/e12424c8-2b84-4375-87f0-bc81949e17fb_TABLET_LANDSCAPE_3_2.jpg",
						"width": 1024,
						"height": 683,
						"fallback": false
					},
					{
						"ratio": "16_9",
						"url": "https://s1.ticketm.net/dam/a/7fb/e12424c8-2b84-4375-87f0-bc81949e17fb_SOURCE",
						"width": 2426,
						"height": 1365,
						"fallback": false
					},
					{
						"ratio": "3_2",
						"url": "https://s1.ticketm.net/dam/a/7fb/e12424c8-2b84-4375-87f0-bc81949e17fb_ARTIST_PAGE_3_2.jpg",
						"width": 305,
						"height": 203,
						"fallback": false
					},
					{
						"ratio": "16_9",
						"url": "https://media.ticketmaster.eu/sweden/4b069e4b933eaa72b88e4500d63c2f19.jpg",
						"width": 205,
						"height": 115,
						"fallback": false
					},
					{
						"ratio": "16_9",
						"url": "https://s1.ticketm.net/dam/a/7fb/e12424c8-2b84-4375-87f0-bc81949e17fb_RECOMENDATION_16_9.jpg",
						"width": 100,
						"height": 56,
						"fallback": false
					}
				],
				"sales": {
					"public": {
						"startDateTime": "2024-04-18T08:00:00Z",
						"startTBD": false,
						"startTBA": false,
						"endDateTime": "2024-09-24T16:30:00Z"
					}
				},
				"dates": {
					"start": {
						"localDate": "2024-09-24",
						"localTime": "19:00:00",
						"dateTime": "2024-09-24T17:00:00Z",
						"dateTBD": false,
						"dateTBA": false,
						"timeTBA": false,
						"noSpecificTime": false
					},
					"timezone": "Europe/Stockholm",
					"status": {
						"code": "onsale"
					},
					"spanMultipleDays": false
				},
				"classifications": [
					{
						"primary": true,
						"segment": {
							"id": "KZFzniwnSyZfZ7v7nJ"
						},
						"genre": {
							"id": "KnvZfZ7vAvl"
						},
						"subGenre": {
							"id": "KZazBEonSMnZfZ7vk1I"
						},
						"family": false
					}
				],
				"promoter": {
					"id": "903",
					"name": "Cirkus Arena och Restaurang på Djurgården"
				},
				"promoters": [
					{
						"id": "903",
						"name": "Cirkus Arena och Restaurang på Djurgården"
					}
				],
				"_links": {
					"self": {
						"href": "/discovery/v2/events/Z698xZq2Z17_bFo?locale=sv-se"
					},
					"attractions": [
						{
							"href": "/discovery/v2/attractions/K8vZ917hTw7?locale=sv-se"
						},
						{
							"href": "/discovery/v2/attractions/K8vZ917Q5i7?locale=sv-se"
						}
					],
					"venues": [
						{
							"href": "/discovery/v2/venues/Z198xZq2ZAv1?locale=sv-se"
						}
					]
				},
				"_embedded": {
					"venues": [
						{
							"name": "Cirkus",
							"type": "venue",
							"id": "Z198xZq2ZAv1",
							"test": false,
							"url": "https://www.ticketmaster.se/venue/cirkus-stockholm-biljetter/cir/580",
							"locale": "sv-se",
							"images": [
								{
									"ratio": "16_9",
									"url": "https://media.ticketmaster.eu/sweden/4341b671510fcad2a1b731681b909001.jpg",
									"width": 205,
									"height": 115,
									"fallback": false
								}
							],
							"timezone": "Europe/Stockholm",
							"city": {
								"name": "Stockholm"
							},
							"country": {
								"name": "Sverige",
								"countryCode": "SE"
							},
							"address": {
								"line1": "Djurgårdsslätten 43-45"
							},
							"location": {
								"longitude": "18.09969",
								"latitude": "59.32457"
							},
							"upcomingEvents": {
								"mfx-se": 107,
								"_total": 107,
								"_filtered": 0
							},
							"_links": {
								"self": {
									"href": "/discovery/v2/venues/Z198xZq2ZAv1?locale=sv-se"
								}
							}
						}
					],
					"attractions": [
						{
							"type": "attraction",
							"id": "K8vZ917hTw7",
							"test": false,
							"url": "https://www.ticketmaster.com/lords-of-the-sound-tickets/artist/3082520",
							"locale": "sv-se",
							"images": [
								{
									"ratio": "16_9",
									"url": "https://s1.ticketm.net/dam/a/7fb/e12424c8-2b84-4375-87f0-bc81949e17fb_EVENT_DETAIL_PAGE_16_9.jpg",
									"width": 205,
									"height": 115,
									"fallback": false
								},
								{
									"ratio": "3_2",
									"url": "https://s1.ticketm.net/dam/a/7fb/e12424c8-2b84-4375-87f0-bc81949e17fb_RETINA_PORTRAIT_3_2.jpg",
									"width": 640,
									"height": 427,
									"fallback": false
								},
								{
									"ratio": "16_9",
									"url": "https://s1.ticketm.net/dam/a/7fb/e12424c8-2b84-4375-87f0-bc81949e17fb_TABLET_LANDSCAPE_16_9.jpg",
									"width": 1024,
									"height": 576,
									"fallback": false
								},
								{
									"ratio": "16_9",
									"url": "https://s1.ticketm.net/dam/a/7fb/e12424c8-2b84-4375-87f0-bc81949e17fb_TABLET_LANDSCAPE_LARGE_16_9.jpg",
									"width": 2048,
									"height": 1152,
									"fallback": false
								},
								{
									"ratio": "16_9",
									"url": "https://s1.ticketm.net/dam/a/7fb/e12424c8-2b84-4375-87f0-bc81949e17fb_RETINA_LANDSCAPE_16_9.jpg",
									"width": 1136,
									"height": 639,
									"fallback": false
								},
								{
									"ratio": "4_3",
									"url": "https://s1.ticketm.net/dam/a/7fb/e12424c8-2b84-4375-87f0-bc81949e17fb_CUSTOM.jpg",
									"width": 305,
									"height": 225,
									"fallback": false
								},
								{
									"ratio": "16_9",
									"url": "https://s1.ticketm.net/dam/a/7fb/e12424c8-2b84-4375-87f0-bc81949e17fb_RETINA_PORTRAIT_16_9.jpg",
									"width": 640,
									"height": 360,
									"fallback": false
								},
								{
									"ratio": "3_2",
									"url": "https://s1.ticketm.net/dam/a/7fb/e12424c8-2b84-4375-87f0-bc81949e17fb_TABLET_LANDSCAPE_3_2.jpg",
									"width": 1024,
									"height": 683,
									"fallback": false
								},
								{
									"ratio": "16_9",
									"url": "https://s1.ticketm.net/dam/a/7fb/e12424c8-2b84-4375-87f0-bc81949e17fb_SOURCE",
									"width": 2426,
									"height": 1365,
									"fallback": false
								},
								{
									"ratio": "3_2",
									"url": "https://s1.ticketm.net/dam/a/7fb/e12424c8-2b84-4375-87f0-bc81949e17fb_ARTIST_PAGE_3_2.jpg",
									"width": 305,
									"height": 203,
									"fallback": false
								},
								{
									"ratio": "16_9",
									"url": "https://s1.ticketm.net/dam/a/7fb/e12424c8-2b84-4375-87f0-bc81949e17fb_RECOMENDATION_16_9.jpg",
									"width": 100,
									"height": 56,
									"fallback": false
								}
							],
							"classifications": [
								{
									"primary": true,
									"segment": {
										"id": "KZFzniwnSyZfZ7v7nJ"
									},
									"genre": {
										"id": "KnvZfZ7vAeJ"
									},
									"subGenre": {
										"id": "KZazBEonSMnZfZ7vF1A"
									},
									"type": {
										"id": "KZAyXgnZfZ7v7l1"
									},
									"subType": {
										"id": "KZFzBErXgnZfZ7vA7A"
									},
									"family": false
								}
							],
							"upcomingEvents": {
								"mfx-dk": 1,
								"mfx-se": 5,
								"mfx-be": 4,
								"wts-tr": 4,
								"_total": 14,
								"_filtered": 0
							},
							"_links": {
								"self": {
									"href": "/discovery/v2/attractions/K8vZ917hTw7?locale=sv-se"
								}
							}
						},
						{
							"type": "attraction",
							"id": "K8vZ917Q5i7",
							"test": false,
							"url": "https://www.ticketmaster.com/cirkus-tickets/artist/2865804",
							"locale": "sv-se",
							"images": [
								{
									"ratio": "16_9",
									"url": "https://s1.ticketm.net/dam/a/db6/5e29ba63-300c-4ffe-9ee3-4a47cc6b6db6_RETINA_LANDSCAPE_16_9.jpg",
									"width": 1136,
									"height": 639,
									"fallback": false
								},
								{
									"ratio": "16_9",
									"url": "https://s1.ticketm.net/dam/a/db6/5e29ba63-300c-4ffe-9ee3-4a47cc6b6db6_RECOMENDATION_16_9.jpg",
									"width": 100,
									"height": 56,
									"fallback": false
								},
								{
									"ratio": "16_9",
									"url": "https://s1.ticketm.net/dam/a/db6/5e29ba63-300c-4ffe-9ee3-4a47cc6b6db6_TABLET_LANDSCAPE_16_9.jpg",
									"width": 1024,
									"height": 576,
									"fallback": false
								},
								{
									"ratio": "16_9",
									"url": "https://s1.ticketm.net/dam/a/db6/5e29ba63-300c-4ffe-9ee3-4a47cc6b6db6_SOURCE",
									"width": 2425,
									"height": 1356,
									"fallback": false
								},
								{
									"ratio": "16_9",
									"url": "https://s1.ticketm.net/dam/a/db6/5e29ba63-300c-4ffe-9ee3-4a47cc6b6db6_RETINA_PORTRAIT_16_9.jpg",
									"width": 640,
									"height": 360,
									"fallback": false
								},
								{
									"ratio": "16_9",
									"url": "https://s1.ticketm.net/dam/a/db6/5e29ba63-300c-4ffe-9ee3-4a47cc6b6db6_EVENT_DETAIL_PAGE_16_9.jpg",
									"width": 205,
									"height": 115,
									"fallback": false
								},
								{
									"ratio": "4_3",
									"url": "https://s1.ticketm.net/dam/a/db6/5e29ba63-300c-4ffe-9ee3-4a47cc6b6db6_CUSTOM.jpg",
									"width": 305,
									"height": 225,
									"fallback": false
								},
								{
									"ratio": "16_9",
									"url": "https://s1.ticketm.net/dam/a/db6/5e29ba63-300c-4ffe-9ee3-4a47cc6b6db6_TABLET_LANDSCAPE_LARGE_16_9.jpg",
									"width": 2048,
									"height": 1152,
									"fallback": false
								},
								{
									"ratio": "3_2",
									"url": "https://s1.ticketm.net/dam/a/db6/5e29ba63-300c-4ffe-9ee3-4a47cc6b6db6_TABLET_LANDSCAPE_3_2.jpg",
									"width": 1024,
									"height": 683,
									"fallback": false
								},
								{
									"ratio": "3_2",
									"url": "https://s1.ticketm.net/dam/a/db6/5e29ba63-300c-4ffe-9ee3-4a47cc6b6db6_RETINA_PORTRAIT_3_2.jpg",
									"width": 640,
									"height": 427,
									"fallback": false
								},
								{
									"ratio": "3_2",
									"url": "https://s1.ticketm.net/dam/a/db6/5e29ba63-300c-4ffe-9ee3-4a47cc6b6db6_ARTIST_PAGE_3_2.jpg",
									"width": 305,
									"height": 203,
									"fallback": false
								}
							],
							"classifications": [
								{
									"primary": true,
									"segment": {
										"id": "KZFzniwnSyZfZ7v7na"
									},
									"genre": {
										"id": "KnvZfZ7v7le"
									},
									"subGenre": {
										"id": "KZazBEonSMnZfZ7vF1k"
									},
									"type": {
										"id": "KZAyXgnZfZ7v7nI"
									},
									"subType": {
										"id": "KZFzBErXgnZfZ7v7lJ"
									},
									"family": false
								}
							],
							"upcomingEvents": {
								"mfx-se": 110,
								"_total": 110,
								"_filtered": 0
							},
							"_links": {
								"self": {
									"href": "/discovery/v2/attractions/K8vZ917Q5i7?locale=sv-se"
								}
							}
						}
					]
				}
			},
			amount: 1
		}
	];




	// const testFunction = (cart) => {
	// 	const _sections = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	// 	cart.forEach(item => {

	// 		const event = {
	// 			eventObject: item,
	// 			tickets: []
	// 		}
	// 		const sectionIndex = Math.floor(Math.random() * _sections.length);
	// 		let seat = Math.floor(Math.random() * 200) + 1;
	// 		for (let i = 0; i < item.amount; i++) {

	// 			let ticketId = '';
	// 			if (events.length === 0) {
	// 				ticketId = Math.random().toString(36).substring(2, 7).toUpperCase(); //Skapar en random sträng med siffror och versaler som är 5 tecken lång.
	// 			} else {
	// 				do {
	// 					ticketId = Math.random().toString(36).substring(2, 7).toUpperCase(); //Skapar en random sträng med siffror och versaler som är 5 tecken lång.
	// 				} while (events.find(ticket => ticket.id === ticketId)); //Vill bara säkerställa mig om att det inte dyker upp en dublett bland IDn.  
	// 			}

	// 			event.tickets.push({
	// 				id: ticketId,
	// 				seat: seat,
	// 				section: _sections[sectionIndex]
	// 			});
	// 			seat++;

	// 		}
	// 		addTicket(event);
	// 	});
	// 	saveToLocal();

	// }



	return (
		<section className='homepage-content'>
			<img src={Logo} alt="Logga för företaget" />
			<h1 className='page-header'>Where It's @</h1>
			<p className='sub-header'>Ticketing made easy</p>
		</section>
	);
}

export default HomePage;