import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import CartPage from './pages/cartPage/CartPage';
import HomePage from './pages/homePage/HomePage';
import EventsPage from './pages/eventsPage/EventsPage';
import DetailsPage from './pages/detailsPage/DetailsPage';
import TicketsPage from './pages/ticketsPage/TicketsPage';
import ErrorPage from './pages/errorPage/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/events',
    element: <EventsPage />,
  },
  {
    path: '/events/:id',
    element: <DetailsPage />,
  },
  {
    path: '/tickets',
    element: <TicketsPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
