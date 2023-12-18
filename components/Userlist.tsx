"use client";
import React, { useEffect, useState } from "react";
import { User } from "@/app/types/user";

const Userlist = () => {
  const [userlist, setUserlist] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/user", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data: User[] = await response.json();
        setUserlist(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Set up an interval to fetch data every 5 seconds
    const intervalId = setInterval(fetchData, 5000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative h-full">
      <h1 className="absolute -mt-4 ml-2 bg-slate-800 px-2">Userlist</h1>
      <div className="flex flex-wrap h-full w-full border-2 border-slate-700 p-4 rounded gap-2">
        {userlist.map((data: User, key) => (
          <p
            key={key}
            className="text-slate-700 py-1 px-2 h-fit w-fit text-center rounded bg-blue-50 p-2">
            <p>id: {data.id}</p>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Userlist;
