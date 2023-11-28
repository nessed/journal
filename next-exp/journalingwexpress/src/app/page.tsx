"use client"
import React, { useEffect, useState } from 'react';
import EntryBar from './components/EntryBar';
import SearchBar from './components/SearchBar';
import Sidebar from './components/Sidebar';
import { error } from 'console';



type User = {
  id: number;
  content: string;
  date: string;
  error: string
};

// TODO: 2. Combine backend and frontend folders
const Home: React.FC = () => {
  const [data, setData] = useState<User[]>([]);
  const [filteredData, setFilteredData] = useState<User[]>([]);
  const [query, setQuery] = useState<string>()

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/log');
        const responseData = await res.json();
        setData(responseData.users);
        setFilteredData(responseData.users);
      } 
      catch (err) {
        // TODO: 1. Fake an error by not starting your server before running the app. See how the app behaves now. Come up with a solution for this.
        // Show a modal - look up react modal npm library
        console.log('Error fetching dataaaaa', err);
        setError(err)
      }
    };
    fetchData();

    console.log('Executing fetch useEffect')
  }, []);

  useEffect(() => {
    if (query !== undefined && query !== '') {
      const filtered = data.filter(e => e.content.includes(query))
      setFilteredData(filtered)
    }

    console.log('Executing query useEffect')

  }, [query])

  return (
    <div className="h-screen relative bg-purple-500">
      <Sidebar />
      <SearchBar setQuery={setQuery} />
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
