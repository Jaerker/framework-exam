import { useState } from 'react';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './search-bar.css';

const SearchBar = ({ onSearchButtonClicked, value, onValueChanged, filterOption }) => {
    const [filterActive, setFilterActive] = useState(false);

    return (
        <form className='search-form-container' onSubmit={(e) => onSearchButtonClicked(e, setFilterActive)} >
            <section className='search-bar'>
                <button className='search-button' aria-label='Filter knapp'>
                    <FontAwesomeIcon icon={faFilter} size='xl' value={value} className={`filter-icon ${filterActive ? 'filter-icon--active' : 'filter-icon--inactive'}`} />
                </button>
                <input className='search-field' aria-label='Sökfält' size={'lg'} type='search' name='searchInput' value={value.searchInput} onChange={onValueChanged} />
            </section>
            <section className={`filter-search ${filterActive ? 'filter-search--active' : 'filter-search--inactive'}`}>
                <fieldset className='radio-buttons'>
                    <legend className='radio-legend span-2'>{filterActive ? 'Sök baserat på' : `Sök baserat på ${filterOption}`}</legend>
                    <label htmlFor='byCity'>Stad</label>
                    <label htmlFor='byKeyword'>Nyckelord</label>
                    <input type='radio' value='stad' onChange={onValueChanged} name='filter' id='byCity' />
                    <input type='radio' value='nyckelord' defaultChecked onChange={onValueChanged} name='filter' id='byKeyword' />
                </fieldset>
            </section>
        </form>
    );
}

export default SearchBar;