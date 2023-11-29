
"use client";
import React, { useEffect, useState } from 'react';
import EntryBar from './components/EntryBar';
import SearchBar from './components/SearchBar';
import Sidebar from './components/Sidebar';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Home = () => {

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState(null);
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/log');
        const responseData = await res.json();
        setData(responseData.users);
        setFilteredData(responseData.users);
      } catch (err) {
        console.log('Error fetching data', err);
        setError(err);
      }
    };
    fetchData();

    console.log('Executing fetch useEffect');
  }, []);

  useEffect(() => {
    if (query !== undefined && query !== '') {
      const filtered = data.filter(e => e.content.includes(query));
      setFilteredData(filtered);
    }

    console.log('Executing query useEffect');

  }, [query]);
  console.log("HELOOOOOOOOOOOOOOOOOOOOOO", error)
  if (error != null) {
    return (
      <div>
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
        <Modal classNames="w-screen" open onClose={onCloseModal} center>
          <h2 className='h-screen w-screen'>
            <h3>ERROR</h3>
             </h2>
        </Modal>
      </div>
    )
    console.log("THERE IS AN ERROR")
  }
  else {

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
};
export default Home;
