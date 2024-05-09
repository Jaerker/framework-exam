import { useEffect, useState } from 'react';
import { usePathStore } from '../../store/pathStore.js';
import agent from '../../api/agent';
import SearchBar from '../../components/searchBar/SearchBar';
import CardContainer from '../../components/cardContainer/CardContainer';

const EventsPage = () => {

    const { setPath } = usePathStore((state) => state);
    const [searchValue, setSearchValue] = useState({
        filter: 'nyckelord',
        radius: 50,
        searchInput: ''
    });
    const [searchResults, setSearchResults] = useState(null);
    const onInputChanged = (e) => {
        const newValue = { ...searchValue, [e.target.name]: e.target.value };
        setSearchValue(newValue);
    }
    const onSearchButtonClicked = (e, setFilterActive) => {
        e.preventDefault();
        setFilterActive((prev) => !prev)
    }
    const updateSearchResults = async () => {
        let results = null;
        if (searchValue.filter === 'nyckelord') {
            console.log('searching by nyckelord')
            results = await agent.search.byKeyword(searchValue.searchInput);
        }
        else {
            console.log('searching by stad')
            results = await agent.search.byCity(searchValue.searchInput);
        }
        if (results) setSearchResults(results);
        else setSearchResults([]);
    }

    useEffect(() => {
        updateSearchResults();
    }, [searchValue]);
    useEffect(() => {
        setPath('/events');
    }, []);

    return (
        <>
            <h1 className='page-header'>Events</h1>
            <SearchBar value={searchValue} onValueChanged={onInputChanged} onSearchButtonClicked={onSearchButtonClicked} filterOption={searchValue.filter} />
            <CardContainer list={searchResults} />
        </>
    );
};

export default EventsPage;