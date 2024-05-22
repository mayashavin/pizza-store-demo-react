import { useCallback, useEffect } from 'react';
import { useSearch } from '../hooks/useSearch';

// eslint-disable-next-line react/prop-types
export const SearchBox = ({ onChange, defaultValue }) => {
    const {searchTerm, setSearchTerm} = useSearch();

    const onChangeHandler = useCallback(
        (event) => {
        setSearchTerm(event.target.value);
        onChange(event.target.value);
    },
    [onChange, setSearchTerm]
    );

    useEffect(() => {
        defaultValue && setSearchTerm(defaultValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <div>
            <input
                type="text"
                onChange={onChangeHandler}
                value={searchTerm} 
                placeholder="Search for a pizza"
                data-testid="search-input"
                id="searchbox" />
        </div>
    )
}