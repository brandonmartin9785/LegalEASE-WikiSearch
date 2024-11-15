import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/search?q=${query}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching search results', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Wikipedia"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {results.map((result) => (
          <div key={result.pageid} style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{result.title}</p>
            <div dangerouslySetInnerHTML={{ __html: result.snippet }}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;