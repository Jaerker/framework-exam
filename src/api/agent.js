import axios from 'axios';

axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2'
/*
        /events/Z698xZq2Z17_kGt?apikey=b0FzW77q5nOdS9y0SA7d1xnWtcf37Z7F&locale=sv-se' 
*/

const request = {
    get: (url) => axios.get(`${url}&apikey=b0FzW77q5nOdS9y0SA7d1xnWtcf37Z7F`).then(res => res.data._embedded).catch(err => console.log(err)),
    getDetails: (url) => axios.get(`${url}&apikey=b0FzW77q5nOdS9y0SA7d1xnWtcf37Z7F`).then(res => res.data).catch(err => console.log(err))
}
//byKeyword utan keyword parametern returnerar alla events, så det är default när man laddar upp events.
const search = {
    byKeyword: (keyword = '', page = 0) => request.get(`/events?locale=sv-se&keyword=${keyword}&page=${page}`).then(res => res.events).catch(err => console.log(err)),
    byCity: (city, page = 0) => request.get(`/events?locale=sv-se&city=${city}&page=${page}`).then(res => res.events).catch(err => console.log(err)),
    byRadiusAroundCity: (city, radius, page = 0) => request.get(`/events?locale=sv-se&city=${city}&radius=${radius}&unit=km&page=${page}`).then(res => res.events).catch(err => console.log(err)),
}

const details = {
    byId: (id) => request.getDetails(`/events/${id}?locale=sv-se`)
}

const agent = {
    search,
    details,
}

export default agent;