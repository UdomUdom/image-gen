"use client";
import { useState } from "react";

export default function ContestSpace() {
  const [image, setimage] = useState();
  const [data, setdata] = useState({
    prompt: "",
    size: "",
  });

  function onchange(e: any) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }
  async function createimage() {
    const { prompt, size } = data;
    const response = await fetch("http://localhost:3000/openai/generateimage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
        size: size,
      }),
    });
    const value = response.json();
    value.then((e) => {
      setimage(e.data);
    });
  }
  return (
    <div className="absolute top-28 w-full px-4 max-w-3xl mx-auto">
      <div className="border-3 border-gray-500 bg-gray-700 bg-opacity-75 rounded-lg p-4 mb-5 flex flex-col items-center">
        <img src={image} alt="" className="w-full max-w-md" />
      </div>
      <div className="flex flex-col md:flex-row items-center mb-5 justify-center">
        <input
          type="text"
          placeholder="prompt here..."
          name="prompt"
          value={data.prompt}
          onChange={onchange}
          size={40}
          className="mb-2 md:mb-0 md:mr-2 p-2 border rounded w-full md:w-auto"
        />
        <select
          name="size"
          value={data.size}
          onChange={onchange}
          className="mb-2 md:mb-0 md:mr-2 p-2 border rounded w-full md:w-auto"
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <button
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md px-5 py-2 opacity-80 w-full md:w-auto"
          onClick={createimage}
        >
          Generate
        </button>
      </div>
    </div>
  );
}
