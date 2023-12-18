"use client";

import { useState } from "react";

const Subscriber = () => {
  const [id, setId] = useState("");
  const [responseMessage, setresponseMessage] = useState<{
    message: string;
    error?: boolean;
  }>({ message: "", error: false });

  const handleSubscribe = async () => {
    try {
      if (id.length <= 0) throw "wrong id";

      const response = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        setresponseMessage({ message: "Subscription successful" });
      } else {
        throw "Subscription failed - " + response.status;
      }
    } catch (responseMessage) {
      setresponseMessage({
        message: "Error: " + responseMessage,
        error: true,
      });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h1>Next.js Subscription Example</h1>
      <p
        className={`italic text-xs h-2 ${
          responseMessage.error ? "text-red-500" : "text-green-500"
        }`}>
        {responseMessage.message}
      </p>
      <div className="flex justify-between w-full">
        <input
          type="text"
          placeholder="enter your id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
          className="w-full rounded bg-slate-700 py-1 px-2 italic focus:outline-none focus:ring focus:border-indigo-600"
        />
        <div className="relative w-40  cursor-pointer">
          <div onClick={() => {}} className="bg-slate-700 rounded">
            Select Team
          </div>
          <div className="bg-gray-800 rounded">{}</div>
        </div>
      </div>
      <button
        onClick={handleSubscribe}
        className="bg-slate-800 py-2 px-2 rounded">
        Subscribe
      </button>
    </div>
  );
};

export default Subscriber;
