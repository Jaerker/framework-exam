import Card from '../../components/card/Card';

const EventsPage = () => {

    const dummyData = {
        "name": "Humorklacken med Thomas Petersson",
        "type": "event",
        "id": "Z698xZq2Z17_3F9",
        "test": false,
        "url": "https://www.ticketmaster.se/event/humorklacken-med-thomas-petersson-biljetter/652217",
        "locale": "sv-se",
        "images": [
            {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/918/c3c3800c-6906-4f2a-87a2-6a325cce7918_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
            },
            {
                "ratio": "16_9",
                "url": "https://media.ticketmaster.eu/sweden/51d583deeddb8f99a03977f91fb5a2c9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
            },
            {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/918/c3c3800c-6906-4f2a-87a2-6a325cce7918_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
            },
            {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/918/c3c3800c-6906-4f2a-87a2-6a325cce7918_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
            },
            {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/918/c3c3800c-6906-4f2a-87a2-6a325cce7918_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
            },
            {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/918/c3c3800c-6906-4f2a-87a2-6a325cce7918_SOURCE",
                "width": 2426,
                "height": 1365,
                "fallback": false
            },
            {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/918/c3c3800c-6906-4f2a-87a2-6a325cce7918_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
            },
            {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/918/c3c3800c-6906-4f2a-87a2-6a325cce7918_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
            },
            {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/918/c3c3800c-6906-4f2a-87a2-6a325cce7918_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
            },
            {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/918/c3c3800c-6906-4f2a-87a2-6a325cce7918_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
            },
            {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/918/c3c3800c-6906-4f2a-87a2-6a325cce7918_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
            }
        ],
        "sales": {
            "public": {
                "startDateTime": "2023-12-20T08:11:10Z",
                "startTBD": false,
                "startTBA": false,
                "endDateTime": "2024-05-03T16:30:00Z"
            }
        },
        "dates": {
            "start": {
                "localDate": "2024-05-03",
                "localTime": "19:00:00",
                "dateTime": "2024-05-03T17:00:00Z",
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
                    "id": "KZFzniwnSyZfZ7v7na"
                },
                "genre": {
                    "id": "KnvZfZ7vAe1"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vF17"
                },
                "family": false
            },
            {
                "primary": false,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7na"
                },
                "genre": {
                    "id": "KnvZfZ7vAe1"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7vF17"
                },
                "family": false
            }
        ],
        "promoter": {
            "id": "12791",
            "name": "Dark Duck Group AB"
        },
        "promoters": [
            {
                "id": "12791",
                "name": "Dark Duck Group AB"
            }
        ],
        "priceRanges": [
            {
                "type": "standard including fees",
                "currency": "SEK",
                "min": 0.0,
                "max": 369.0
            },
            {
                "type": "standard",
                "currency": "SEK",
                "min": 0.0,
                "max": 329.0
            }
        ],
        "seatmap": {
            "staticUrl": "https://media.ticketmaster.eu/sweden/14afbd034abc7a1b698b7da72bc442aa.jpg"
        },
        "_links": {
            "self": {
                "href": "/discovery/v2/events/Z698xZq2Z17_3F9?locale=sv-se"
            },
            "attractions": [
                {
                    "href": "/discovery/v2/attractions/K8vZ9179Rpf?locale=sv-se"
                },
                {
                    "href": "/discovery/v2/attractions/K8vZ917hE67?locale=sv-se"
                }
            ],
            "venues": [
                {
                    "href": "/discovery/v2/venues/Z698xZq2ZaAKd?locale=sv-se"
                }
            ]
        },
        "_embedded": {
            "venues": [
                {
                    "name": "Gamla Ullevi 12ans",
                    "type": "venue",
                    "id": "Z698xZq2ZaAKd",
                    "test": false,
                    "url": "https://www.ticketmaster.se/venue/gamla-ullevi-12ans-goteborg-biljetter/gac/632",
                    "locale": "sv-se",
                    "timezone": "Europe/Stockholm",
                    "city": {
                        "name": "Göteborg"
                    },
                    "country": {
                        "name": "Sverige",
                        "countryCode": "SE"
                    },
                    "location": {
                        "longitude": "11.97988",
                        "latitude": "57.71129"
                    },
                    "upcomingEvents": {
                        "mfx-se": 1,
                        "_total": 1,
                        "_filtered": 0
                    },
                    "_links": {
                        "self": {
                            "href": "/discovery/v2/venues/Z698xZq2ZaAKd?locale=sv-se"
                        }
                    }
                }
            ],
            "attractions": [
                {
                    "type": "attraction",
                    "id": "K8vZ9179Rpf",
                    "test": false,
                    "url": "https://www.ticketmaster.com/thomas-petersson-tickets/artist/2579633",
                    "locale": "sv-se",
                    "images": [
                        {
                            "ratio": "16_9",
                            "url": "https://s1.ticketm.net/dam/a/918/c3c3800c-6906-4f2a-87a2-6a325cce7918_RETINA_PORTRAIT_16_9.jpg",
                            "width": 640,
                            "height": 360,
                            "fallback": false
                        },
                        {
                            "ratio": "3_2",
                            "url": "https://s1.ticketm.net/dam/a/918/c3c3800c-6906-4f2a-87a2-6a325cce7918_ARTIST_PAGE_3_2.jpg",
                            "width": 305,
                            "height": 203,
                            "fallback": false
                        },
                        {
                            "ratio": "16_9",
                            "url": "https://s1.ticketm.net/dam/a/918/c3c3800c-6906-4f2a-87a2-6a325cce7918_RECOMENDATION_16_9.jpg",
                            "width": 100,
                            "height": 56,
                            "fallback": false
                        },
                        {
                            "ratio": "3_2",
                            "url": "https://s1.ticketm.net/dam/a/918/c3c3800c-6906-4f2a-87a2-6a325cce7918_RETINA_PORTRAIT_3_2.jpg",
                            "width": 640,
                            "height": 427,
                            "fallback": false
                        },
                        {
                            "ratio": "16_9",
                            "url": "https://s1.ticketm.net/dam/a/918/c3c3800c-6906-4f2a-87a2-6a325cce7918_SOURCE",
                            "width": 2426,
                            "height": 1365,
                            "fallback": false
                        },
                        {
                            "ratio": "16_9",
                            "url": "https://s1.ticketm.net/dam/a/918/c3c3800c-6906-4f2a-87a2-6a325cce7918_EVENT_DETAIL_PAGE_16_9.jpg",
                            "width": 205,
                            "height": 115,
                            "fallback": false
                        },
                        {
                            "ratio": "16_9",
                            "url": "https://s1.ticketm.net/dam/a/918/c3c3800c-6906-4f2a-87a2-6a325cce7918_TABLET_LANDSCAPE_16_9.jpg",
                            "width": 1024,
                            "height": 576,
                            "fallback": false
                        },
                        {
                            "ratio": "4_3",
                            "url": "https://s1.ticketm.net/dam/a/918/c3c3800c-6906-4f2a-87a2-6a325cce7918_CUSTOM.jpg",
                            "width": 305,
                            "height": 225,
                            "fallback": false
                        },
                        {
                            "ratio": "16_9",
                            "url": "https://s1.ticketm.net/dam/a/918/c3c3800c-6906-4f2a-87a2-6a325cce7918_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                            "width": 2048,
                            "height": 1152,
                            "fallback": false
                        },
                        {
                            "ratio": "16_9",
                            "url": "https://s1.ticketm.net/dam/a/918/c3c3800c-6906-4f2a-87a2-6a325cce7918_RETINA_LANDSCAPE_16_9.jpg",
                            "width": 1136,
                            "height": 639,
                            "fallback": false
                        },
                        {
                            "ratio": "3_2",
                            "url": "https://s1.ticketm.net/dam/a/918/c3c3800c-6906-4f2a-87a2-6a325cce7918_TABLET_LANDSCAPE_3_2.jpg",
                            "width": 1024,
                            "height": 683,
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
                                "id": "KnvZfZ7vAe1"
                            },
                            "subGenre": {
                                "id": "KZazBEonSMnZfZ7vF17"
                            },
                            "type": {
                                "id": "KZAyXgnZfZ7v7la"
                            },
                            "subType": {
                                "id": "KZFzBErXgnZfZ7vAdJ"
                            },
                            "family": false
                        }
                    ],
                    "upcomingEvents": {
                        "mfx-se": 2,
                        "_total": 2,
                        "_filtered": 0
                    },
                    "_links": {
                        "self": {
                            "href": "/discovery/v2/attractions/K8vZ9179Rpf?locale=sv-se"
                        }
                    }
                },
                {
                    "type": "attraction",
                    "id": "K8vZ917hE67",
                    "test": false,
                    "url": "https://www.ticketmaster.com/humorklacken-tickets/artist/3048036",
                    "locale": "sv-se",
                    "images": [
                        {
                            "ratio": "16_9",
                            "url": "https://s1.ticketm.net/dam/a/368/cb0739b2-1d1a-4211-aed5-c631913a1368_RECOMENDATION_16_9.jpg",
                            "width": 100,
                            "height": 56,
                            "fallback": false
                        },
                        {
                            "ratio": "16_9",
                            "url": "https://s1.ticketm.net/dam/a/368/cb0739b2-1d1a-4211-aed5-c631913a1368_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                            "width": 2048,
                            "height": 1152,
                            "fallback": false
                        },
                        {
                            "ratio": "16_9",
                            "url": "https://s1.ticketm.net/dam/a/368/cb0739b2-1d1a-4211-aed5-c631913a1368_RETINA_PORTRAIT_16_9.jpg",
                            "width": 640,
                            "height": 360,
                            "fallback": false
                        },
                        {
                            "ratio": "16_9",
                            "url": "https://s1.ticketm.net/dam/a/368/cb0739b2-1d1a-4211-aed5-c631913a1368_SOURCE",
                            "width": 2426,
                            "height": 1365,
                            "fallback": false
                        },
                        {
                            "ratio": "16_9",
                            "url": "https://s1.ticketm.net/dam/a/368/cb0739b2-1d1a-4211-aed5-c631913a1368_EVENT_DETAIL_PAGE_16_9.jpg",
                            "width": 205,
                            "height": 115,
                            "fallback": false
                        },
                        {
                            "ratio": "3_2",
                            "url": "https://s1.ticketm.net/dam/a/368/cb0739b2-1d1a-4211-aed5-c631913a1368_ARTIST_PAGE_3_2.jpg",
                            "width": 305,
                            "height": 203,
                            "fallback": false
                        },
                        {
                            "ratio": "16_9",
                            "url": "https://s1.ticketm.net/dam/a/368/cb0739b2-1d1a-4211-aed5-c631913a1368_RETINA_LANDSCAPE_16_9.jpg",
                            "width": 1136,
                            "height": 639,
                            "fallback": false
                        },
                        {
                            "ratio": "16_9",
                            "url": "https://s1.ticketm.net/dam/a/368/cb0739b2-1d1a-4211-aed5-c631913a1368_TABLET_LANDSCAPE_16_9.jpg",
                            "width": 1024,
                            "height": 576,
                            "fallback": false
                        },
                        {
                            "ratio": "4_3",
                            "url": "https://s1.ticketm.net/dam/a/368/cb0739b2-1d1a-4211-aed5-c631913a1368_CUSTOM.jpg",
                            "width": 305,
                            "height": 225,
                            "fallback": false
                        },
                        {
                            "ratio": "3_2",
                            "url": "https://s1.ticketm.net/dam/a/368/cb0739b2-1d1a-4211-aed5-c631913a1368_RETINA_PORTRAIT_3_2.jpg",
                            "width": 640,
                            "height": 427,
                            "fallback": false
                        },
                        {
                            "ratio": "3_2",
                            "url": "https://s1.ticketm.net/dam/a/368/cb0739b2-1d1a-4211-aed5-c631913a1368_TABLET_LANDSCAPE_3_2.jpg",
                            "width": 1024,
                            "height": 683,
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
                                "id": "KnvZfZ7vAe1"
                            },
                            "subGenre": {
                                "id": "KZazBEonSMnZfZ7vF17"
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
                        "mfx-se": 1,
                        "_total": 1,
                        "_filtered": 0
                    },
                    "_links": {
                        "self": {
                            "href": "/discovery/v2/attractions/K8vZ917hE67?locale=sv-se"
                        }
                    }
                }
            ]
        }
    }

    return (
        <>
            <h1 className='page-header'>Events</h1>
            <Card data={dummyData} />
        </>

    );
};

export default EventsPage;