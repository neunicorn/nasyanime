import Link from "next/link";

const Header = ({ title, route }) => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <h1 className="text-xl font-semibold text-primary">{title}</h1>
      {route && (
        <Link
          href={route}
          className=" text-sm font-medium py-2 px-4 bg-primary text-slate-100 rounded-full"
        >
          more
        </Link>
      )}
    </div>
  );
};

export default Header;
