import './home-page.css';
import Logo from '../../assets/img/logo.svg';
const HomePage = () => {

	return (
		<section className='homepage-content'>
			<img src={Logo} alt='Logga för företaget' />
			<h1 className='page-header'>Where It's @</h1>
			<p className='sub-header'>Ticketing made easy</p>
		</section>
	);
}

export default HomePage;