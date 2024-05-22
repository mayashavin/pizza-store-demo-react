// import { useMemo } from "react";
import { useSearchParams } from 'react-router-dom';

export const useSearch = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get('search') || '';

    const setSearchTerm = (term) => { 
        setSearchParams({ search: term });
    }

    return {
        searchTerm,
        setSearchTerm,
    };
}