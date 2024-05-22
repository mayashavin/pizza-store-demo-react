// import { useMemo } from "react";
import { useSearchParams } from 'react-router-dom';

export const useSearch = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get('search') || '';

    // const filteredItems = useMemo(() => {
    //     return items.filter(
    //         movie => filters.some(
    //             filter => movie[filter].toLowerCase().includes(searchTerm.toLowerCase())
    //         )
    //     )                    
    // }, [items, searchTerm, filters]);

    const setSearchTerm = (term) => { 
        setSearchParams({ search: term });
    }

    return {
        searchTerm,
        setSearchTerm,
        // filteredItems
    };
}