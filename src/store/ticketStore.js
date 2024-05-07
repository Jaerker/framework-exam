import { create } from 'zustand';


export const useTicketStore = create((set, get) => ({
    events: localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [],
    addTicket: (ticket) => set((state) => ({ events: [...state.events, ticket] })),
    saveToLocal: () => localStorage.setItem('events', JSON.stringify(get().events)),

    createPurchase: (cartList) => set((state) => {
        const ticketList = [];
        cartList.forEach(event => {
            const tickets = [];
            const randomSeat = Math.floor(Math.random() * 220);
            const randomSection = String.fromCharCode(65 + Math.floor(Math.random() * 26));
            for (let i = 0; i < event.amount; i++) {
                tickets.push({
                    id: Math.random().toString(36).slice(2, 7).toUpperCase(),
                    seat: randomSeat + i, //Fick tipset av Copilot med att använda index siffran för att hålla ihop biljetterna, måste ge credit where credit is due! Jag tänkte plussa på randomSeat i slutet av loopen (och förmodligen använt en forEach istället) så den tackar jag AI stasrkt för!
                    section: randomSection
                });
            }
            ticketList.unshift({
                eventObject: event.eventObject,
                tickets: tickets
            });
        });
        ticketList.sort((a, b) => a.eventObject.dates.start.localDate.localeCompare(b.eventObject.dates.start.localDate));
        localStorage.setItem('events', JSON.stringify([...state.events, ...ticketList]));
        return { events: [...state.events, ...ticketList] };
    }),
}));

/** Mina noter innan jag kodar:
 * 
 * createPurchase ska skapa ett nytt objekt som ska läggas till i tickets listan.
 * 
 * tickets arrayen kan se ut så här: 
 * [
 *     {
 *          eventObject: <Hela event objektet från ticketmaster>,
 *          tickets: [{}]
 *     }
 * ]
 *  
 * en ticket kan se ut så här: 
 * {
 *      id: <5 random bokstäver (Versaler mellan A-Z) och siffror>,
 *      seat: <Random nummer, men om det beställs fler än en biljett till samma event så 
 *           ska siffrorna höra ihop.>,
 *      section: <Random sträng, kanske finns info om det på ticketmaster men annars så är det typ Section A, B, C eller liknande>,
 * }
 * 
 * En funktion som sköter detta sen är förmodligen att se hur många biljetter 
 * som ska göras i ordning och gå igenom de sektionsvis baserat på vilket event 
 * som är valt.
 */