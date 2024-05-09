import { useLocation, useNavigate } from 'react-router-dom';
import { usePathStore } from '../../store/pathStore';
import { useEffect } from 'react';
import Logo from '../../assets/img/logo.svg';
import './purchase-complete-page.css';

const PurchaseCompletePage = () => {
    const { path } = usePathStore((state) => state);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!location.state || path !== '/order/purchaseJustCompleted') {
            navigate('/error');
        }
    }, []);

    return (
        <section>
            {location.state &&
                <>
                    <h1 className='page-header'>Wohoo!</h1>
                    <section className='purchase-page'>
                        <img className='purchase-image' src={Logo} alt='Logga till företag' />

                        <p className='purchase-page__paragraph'>Köpet gick igenom!</p>
                        <table className=' purchase-page__table'>
                            <tbody>
                                <tr>
                                    <td>Id:</td>
                                    <td>{location.state.ticketListId}</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className='purchase-page__paragraph'>Om ni vill se era biljetter så finns de tillgängliga nu i menyn under <i>Biljetter</i></p>
                        <p className='purchase-page__paragraph'>Meddela oss gärna om det uppstår problem!</p>
                    </section>
                </>}

        </section>
    );
}

export default PurchaseCompletePage;