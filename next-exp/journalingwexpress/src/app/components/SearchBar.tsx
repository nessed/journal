// components/SearchBar.tsx
import React, { useState } from 'react';

interface SearchBarProps {
  entries: { id: number; content: string; date: string }[];
  onSearch: (filteredEntries: { id: number; content: string; date: string }[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ entries, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const filteredEntries = entries.filter((entry) =>
      entry.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(filteredEntries);
  };

  return (
    <div className="p-4 flex items-center justify-center content-center">
      <input
        type="text"
        placeholder="Search by content..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 rounded border-none bg-purple-900 text-gray"
      />
      <button
        className="bg-purple-950 p-2 rounded ml-2 text-center"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
