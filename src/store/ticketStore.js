import { create } from 'zustand';


export const useTicketStore = create((set, get) => ({
    events: localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [],
    addTicket: (ticket) => set((state) => ({ events: [...state.events, ticket] })),
    saveToLocal: () => localStorage.setItem('events', JSON.stringify(get().events)),
}));

/**
 * createTicket ska skapa ett nytt objekt som ska läggas till i tickets listan.

 * 
 * tickets arrayen kan se ut så här: 
 * [
 *     {
 *          event: <Hela event objektet från ticketmaster>,
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