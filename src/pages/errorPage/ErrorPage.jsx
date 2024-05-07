import Button from '../../components/button/Button';
import './error-page.css';
import { useNavigate } from 'react-router-dom';
const ErrorPage = () => {
    const navigate = useNavigate();



    return (
        <>
            <h1 className='page-header'>The party was not found!</h1>
            <section className='error-page'>
                <p><i>Well, this is awkward...</i></p>
                <p>Vi ber om ursäkt, men det verkar som att du har hamnat på fel fest! Vi rekommenderar att du dubbelkollar din adress och försöker igen.</p>
                <p> Om problemet kvarstår, kontakta vår support så hjälper vi gärna till att lösa det.</p>
                <Button text='Gå tillbaka' onClick={() => navigate(-1)} />
            </section>
        </>
    );
}

export default ErrorPage;