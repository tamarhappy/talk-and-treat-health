import React, {useState} from 'react';

const SearchBar = ({data}) => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState(data);

    const handleInputChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);

        const newResults = data.filter((item) => {
            return item.name.toLowerCase().includes(newQuery.toLowerCase());
        });

        setResults(newResults);
    };

  return (
    <div className='search_bar'>
        <input type='text' 
         placeholder='Type to search' 
         value={query} 
         onChange={handleInputChange} 
        />
        <ul>
            {results.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>
  );
}

export default SearchBar;