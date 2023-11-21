"use client"
import React, { useEffect, useState } from 'react';
import EntryBar from './components/EntryBar';
import SearchBar from './components/SearchBar';
import Sidebar from './components/Sidebar';

type User = {
  id: number;
  content: string;
  date: string;
};

const Home: React.FC = () => {
  const [data, setData] = useState<User[]>([]);
  const [filteredData, setFilteredData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/log');
        const responseData = await res.json();
        setData(responseData.users);
        setFilteredData(responseData.users);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (filteredEntries: User[]) => {
    setFilteredData(filteredEntries);
  };

  return (
    <div className="h-screen relative bg-purple-500">
      <Sidebar />
      <SearchBar entries={data} onSearch={handleSearch} />
      <div className="text-center bg-purple-500">
        {filteredData.map((journalEntry) => (
          <div key={journalEntry.id}>
            <h1 className="text-3xl">{journalEntry.content}</h1>
          </div>
        ))}
      </div>
      {/* EntryBar at the bottom */}
      <EntryBar />
    </div>
  );
};

export default Home;
