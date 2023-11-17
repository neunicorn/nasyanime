"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchRef.current.value || searchRef.current.value.trim() == "")
      return;
    router.push(`/search/${searchRef.current.value}`);
  };
  return (
    <div className="relative w-1/2 md:w-1/3">
      <form onSubmit={handleSearch}>
        <input
          placeholder="cari anime..."
          className="invisible sm:visible focus:outline-none focus:ring-primary focus:ring-1 text-slate-600 bg-slate-200 rounded-lg w-full  px-4 py-2"
          ref={searchRef}
        />
        <button
          className="absolute top-2 end-2 md:end-3 text-slate-600 text-[24px] md:text-[32px]"
          onClick={handleSearch}
        >
          <MagnifyingGlass size={24} />
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
