"use client";

import { ArrowDownIcon, ArrowUpIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");
  const [sort, setSort] = useState("Character");
  const [ascending, setAscending] = useState(true);

  return (
    <div className="bg-mint-one h-screen mt-12 pr-12 pl-32 py-12 flex flex-col items-center gap-8">
      <div className="w-[60%] flex flex-row bg-white rounded-lg justify-around h-8 items-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-[90%] focus:outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="rounded-full bg-gray-100 h-6 w-6 flex justify-center items-center"
          onClick={() => setResult(search)}
        >
          <MagnifyingGlassIcon />
        </button>
      </div>
      <div className="self-start flex flex-col gap-2">
        <label htmlFor="sortby" className="font-semibold">
          Sort By
        </label>
        <div className="flex flex-row gap-2">
          <select
            id="sortby"
            className="w-auto pr-4 pl-2 py-1 bg-white rounded-lg focus:outline-none"
            defaultValue={sort}
            autoFocus={false}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="Character">Character</option>
            <option value="Creator">Creator</option>
            <option value="Likes">Likes</option>
          </select>
          <button className="rounded-lg bg-white px-2 py-1" onClick={() => setAscending(!ascending)}>
            {ascending? <ArrowUpIcon/> : <ArrowDownIcon/>}
          </button>
        </div>
      </div>
    </div>
  );
}
