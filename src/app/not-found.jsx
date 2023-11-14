import Image from "next/image";
import React from "react";

import notfound from "@/assets/img/notfound.png";
import Link from "next/link";
const Page = () => {
  return (
    <div className="min-h-screen container mx-auto flex justify-center items-center">
      <div className="mx-auto flex items-center justify-center flex-col">
        <Image
          src={notfound}
          className="w-64 rounded-full animate-bounce "
          alt="notfound"
        ></Image>
        <p className="font-bold text-xl mt-2 text-slate-400">
          404 - Page Not Found{" "}
          <span className="text-slate-800">&gt;\\\&lt;</span>
        </p>
        <Link
          href={"/"}
          className="text-white font-medium bg-primary rounded-full px-5 py-2 mt-2 hover:opacity-90 hover:shadow transition duration-500 ease-in-out"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Page;
