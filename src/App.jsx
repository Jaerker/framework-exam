
import CartPage from './pages/cartPage/CartPage';
import HomePage from './pages/homePage/HomePage';
import EventsPage from './pages/eventsPage/EventsPage';
import DetailsPage from './pages/detailsPage/DetailsPage';
import TicketsPage from './pages/ticketsPage/TicketsPage';
import ErrorPage from './pages/errorPage/ErrorPage.jsx'
import Navbar from './components/navbar/Navbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




const App = () => {



    return (
        <BrowserRouter>
            <article className='main-content'>
                <Routes>
                    <Route path="/" element={<HomePage />} errorElement={<ErrorPage />} />
                    <Route path="/events" element={<EventsPage />} />
                    <Route path="/event/:id" element={<DetailsPage />} />
                    <Route path="/tickets" element={<TicketsPage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </article>
            <Navbar />

        </BrowserRouter>);
}

export default App;
