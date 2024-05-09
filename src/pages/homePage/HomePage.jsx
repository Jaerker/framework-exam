import { useEffect } from 'react';
import { usePathStore } from '../../store/pathStore.js';
import Logo from '../../assets/img/logo.svg';
import './home-page.css';

const HomePage = () => {

	const { setPath } = usePathStore((state) => state);

	useEffect(() => {
		setPath('/');
	}, []);

	return (
		<section className='homepage-content'>
			<img src={Logo} alt='Logga för företaget' />
			<h1 className='page-header'>Where It's @</h1>
			<p className='sub-header'>Ticketing made easy</p>
		</section>
	);
}

export default HomePage;