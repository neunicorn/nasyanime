"use client";

import { MagnifyingGlass, XCircle } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const InputSearch = () => {
  const [searchClicked, setSearchClicked] = useState("invisible");
  const searchRef = useRef();
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchRef.current.value || searchRef.current.value.trim() == "")
      return;
    router.push(`/search/${searchRef.current.value}`);
  };
  const handleFocusSearch = (e) => {
    e.preventDefault();
    setSearchClicked((prev) => (prev === "invisible" ? "" : "invisible"));
  };

  useEffect(() => {
    window.innerWidth > 640 && setSearchClicked("");
  });

  return (
    <div className="relative w-1/2 md:w-1/3">
      <form onSubmit={handleSearch}>
        <button
          className={`${searchClicked} sm:hidden absolute top-2 start-[6px] md:end-3 text-slate-600 text-[24px] md:text-[32px]`}
          onClick={handleFocusSearch}
        >
          <XCircle size={24} />
        </button>

        <input
          placeholder="cari anime..."
          className={`${searchClicked} pl-8 pr-2 sm:visible focus:outline-none focus:ring-primary focus:ring-1 text-slate-600 bg-slate-200 rounded-lg w-full  sm:px-4 py-2`}
          ref={searchRef}
        />
        <button
          className="absolute top-2 end-2 md:end-3 text-slate-600 text-[24px] md:text-[32px]"
          onClick={
            searchClicked === "invisible" ? handleFocusSearch : handleSearch
          }
        >
          <MagnifyingGlass size={24} />
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
