// components/SearchBar.tsx
import React, { useState } from 'react';

interface SearchBarProps {
  // setQuery actually updates the value of the search query
  setQuery: (query: string) => void
}

const SearchBar = ({ setQuery }: SearchBarProps) => {

  return (
    <div className="p-4 flex items-center justify-center content-center">
      <input
        type="text"
        placeholder="Search by content..."
        className="p-2 rounded border-none bg-purple-900 text-gray"
        onChange={e => setQuery(e.target.value)}
      />

    </div>
  );
};

export default SearchBar;
