import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 pt-24 pb-12 mt-10">
      <div class="w-full pt-10 border-t border-slate-700">
        <p class="text-slate-500 text-center text-xs">
          made with love <span class="text-pink-500">❤</span> by
          <a
            href="https://github.com/neunicorn"
            target="_blank"
            class="font-bold text-primary"
          >
            zulfan
          </a>
          , with
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            class="font-bold text-sky-500"
          >
            TailwindCSS
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
