import React, { useState } from 'react';

const EntryBar = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleButtonClick = async () => {

        const res = await fetch('http://localhost:5000/api/log', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: inputValue }),
        });

        const responseData = await res.json();
        console.log('New entry created:', responseData.entry);

        setInputValue('');

    };

    return (
        <div className='fixed bottom-0 w-full bg-purple-900 flex items-stretch'>
            <input
                className="w-full p-2 rounded border-none bg-purple-900 text-gray"
                style={{ height: '4rem', }}
                placeholder="Type your entry..."
                value={inputValue}
                onChange={handleInputChange}
            />
            <button
                className='bg-purple-950 p-2 rounded ml-auto text-center'
                style={{ height: '4rem', width: '2rem' }}
                onClick={handleButtonClick}
            >
                Enter
            </button>
        </div>
    );
};

export default EntryBar;
