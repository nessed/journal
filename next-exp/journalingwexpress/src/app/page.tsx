"use client";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};

const Home = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/log");
        const responseData = await res.json();
        setData(responseData.users);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>
          <h1 className="text-3xl">{user.name}</h1>
        </div>
      ))}
    </div>
  )

};

export default Home;
