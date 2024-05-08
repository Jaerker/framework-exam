import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { usePathStore } from '../../store/pathStore';
import { useEffect, useLayoutEffect } from 'react';

const PurchaseCompletePage = () => {
    const { setPath } = usePathStore((state) => state);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (!location.state) {
            navigate('/error');
        }
        console.log(location.state);
        setPath('/order');
    }, []);
    return (
        <section>
            {location.state &&
                <>
                    <h1 className='page-header'>Wohoo!</h1>
                    <section className='purchase-complete'>
                        <p className='purchase-paragraph'><i>Köpet gick igenom, tack!</i></p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Id:</td>
                                    <td>{location.state.ticketListId}</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className='purchase-paragraph'>Om ni vill se era biljetter så finns de tillgängliga nu i menyn under <i>Biljetter</i></p>
                        <p className='purchase-paragraph'>Meddela oss gärna om det uppstår problem!</p>
                    </section>
                </>}

        </section>
    );
}

export default PurchaseCompletePage;