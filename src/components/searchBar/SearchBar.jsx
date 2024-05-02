import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './search-bar.css';
import { useState } from 'react';
const SearchBar = ({ onSearchButtonClicked, value, onValueChanged }) => {
    const [filterActive, setFilterActive] = useState(false);
    return (
        <form className='search-form-container' onSubmit={(e) => onSearchButtonClicked(e, setFilterActive)} >
            <section className='search-bar'>
                <button className='search-button'>
                    <FontAwesomeIcon icon={faFilter} size='xl' value={value} className={`filter-icon ${filterActive ? 'filter-icon--active' : 'filter-icon--inactive'}`} />
                </button>
                <input className='search-field' size={'lg'} type="search" name='searchInput' value={value.searchInput} onChange={onValueChanged} />
            </section>
            <section className={`filter-search ${filterActive ? value.filter === 'city' ? 'filter-search--active-with-city' : 'filter-search--active' : 'filter-search--inactive'}`}>
                <label className='span-2' htmlFor="filter">Sök baserat på</label>
                <label htmlFor="stad">Stad</label>
                <label htmlFor="stad">Nyckelord</label>
                <input type="radio" value='city' onChange={onValueChanged} name='filter' id="byCity" />
                <input type="radio" value='keyword' defaultChecked onChange={onValueChanged} name="filter" id="byKeyword" />
                {value.filter === 'city' &&
                    <>
                        <label htmlFor="radius" className="span-2">Radie från stad: <i>{value.radius}KM</i></label>
                        <input className='span-2' type="range" name="radius" id="radiusAroundCity" min='5' max='100' step='1' value={value.radius} onChange={onValueChanged} />
                    </>
                }

            </section>
        </form>
    );
}

export default SearchBar;