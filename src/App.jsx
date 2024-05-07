
import OrderPage from './pages/orderPage/OrderPage';
import HomePage from './pages/homePage/HomePage';
import EventsPage from './pages/eventsPage/EventsPage';
import DetailsPage from './pages/detailsPage/DetailsPage';
import TicketsPage from './pages/ticketsPage/TicketsPage';
import ErrorPage from './pages/errorPage/ErrorPage.jsx'
import Navbar from './components/navbar/Navbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { usePathStore } from './store/pathStore.js';
import { useEffect, useState } from 'react';



const App = () => {
    const { path } = usePathStore((state) => state);
    const [bgClass, setBgClass] = useState('');
    useEffect(() => {
        if (path === '/tickets') {
            setBgClass('bg-holder--gradient');
        }
        else {
            setBgClass('');

        }
    }, [path]);
    return (
        <BrowserRouter>
            <span className={`bg-holder ${bgClass}`}>
            </span>
            <article className='main-content'>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/events" element={<EventsPage />} />
                    <Route path="/event/:id" element={<DetailsPage />} />
                    <Route path="/tickets" element={<TicketsPage />} />
                    <Route path="/order" element={<OrderPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </article>
            <Navbar />

        </BrowserRouter>);
}

export default App;
