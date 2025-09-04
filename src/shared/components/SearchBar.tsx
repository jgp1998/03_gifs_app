import { useEffect, useState, type KeyboardEvent } from "react";

interface SearchBarProps {
    placeholder: string;
    btnText: string;
    onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder, btnText, onQuery }: SearchBarProps) => {
    const [query, setQuery] = useState<string>('');
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onQuery(query);
        }, 700);

        return () => {
            clearTimeout(timeoutId);
        }
    }, [query, setQuery]);


    const handleSearch = () => {
        onQuery(query);
        // setQuery('');
    }
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') handleSearch();
    }

    return (

        <div className="search-container">
            {/* <h1>{query}</h1> */}
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button
                onClick={handleSearch}
            >{btnText}</button>
        </div>
    )
}