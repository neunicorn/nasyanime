import Link from "next/link";

const Header = ({ title, route }) => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <h1 className="text-xl font-semibold text-slate-700">{title}</h1>
      {route && (
        <Link href={route} className="btn-card">
          more
        </Link>
      )}
    </div>
  );
};

export default Header;
