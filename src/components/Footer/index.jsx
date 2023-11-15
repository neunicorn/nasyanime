import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 pt-24 pb-12">
      <div className="w-full pt-10 border-t border-slate-700">
        <p className="text-slate-500 text-center text-xs">
          made with love <span className="text-pink-500">❤</span> by
          <Link
            href="https://github.com/neunicorn"
            target="_blank"
            className="font-bold text-primary"
          >
            zulfan
          </Link>
          , with
          <Link
            href="https://tailwindcss.com/"
            target="_blank"
            className="font-bold text-sky-500"
          >
            TailwindCSS
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
