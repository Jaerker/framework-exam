import { useEffect, useState } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import agent from '../../api/agent';
import CardContainer from '../../components/cardContainer/CardContainer';

const EventsPage = () => {

    const [searchValue, setSearchValue] = useState({
        filter: 'keyword',
        radius: 50,
        searchInput: ''
    });
    const [searchResults, setSearchResults] = useState([]);

    const onInputChanged = (e) => {
        const newValue = { ...searchValue, [e.target.name]: e.target.value }
        setSearchValue(newValue)
        // setSearchValue(e.target.value);

    }
    const onSearchButtonClicked = (e, setFilterActive) => {
        e.preventDefault();
        setFilterActive((prev) => !prev)
    }
    const updateSearchResults = async () => {
        let results = null;
        if (searchValue.filter === 'keyword') {
            results = await agent.search.byKeyword(searchValue.searchInput);
        }
        else {
            results = await agent.search.byRadiusAroundCity(searchValue.searchInput, searchValue.radius);
        }

        if (results) setSearchResults(results);
        else setSearchResults([]);


    }


    useEffect(() => {
        updateSearchResults();
    }, [searchValue]);

    return (
        <>
            <h1 className='page-header'>Events</h1>
            <SearchBar value={searchValue} onValueChanged={onInputChanged} onSearchButtonClicked={onSearchButtonClicked} />

            <CardContainer list={searchResults} />
        </>
    );
};

export default EventsPage;