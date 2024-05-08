import Button from '../../components/button/Button';
import './error-page.css';
import { useNavigate } from 'react-router-dom';
const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1 className='page-header'>The party was not found!</h1>
            <section className='error-page'>
                <p className='error-paragraph'><i>Well, this is awkward...</i></p>
                <p className='error-paragraph'>Vi ber om ursäkt, men det verkar som att du har hamnat på fel fest! Vi rekommenderar att du dubbelkollar din adress och försöker igen.</p>
                <p className='error-paragraph'> Om problemet kvarstår, kontakta vår support så hjälper vi gärna till att lösa det.</p>
                <Button text='Gå till första sidan igen' onClick={() => navigate('/')} />
            </section>
        </>
    );
}

export default ErrorPage;